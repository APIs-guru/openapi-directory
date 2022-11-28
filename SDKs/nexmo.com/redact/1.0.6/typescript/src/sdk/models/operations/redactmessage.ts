import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RedactMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RedactMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RedactTransaction;

  @SpeakeasyMetadata()
  security: RedactMessageSecurity;
}


export class RedactMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorInvalidId?: shared.ErrorInvalidId;

  @SpeakeasyMetadata()
  errorThrottled?: shared.ErrorThrottled;

  @SpeakeasyMetadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  redactMessage403ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  redactMessage422ApplicationJsonOneOf?: any;
}
