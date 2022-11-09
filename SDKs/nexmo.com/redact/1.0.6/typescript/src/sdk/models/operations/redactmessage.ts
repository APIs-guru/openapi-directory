import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RedactMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class RedactMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RedactTransaction;

  @Metadata()
  security: RedactMessageSecurity;
}


export class RedactMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorInvalidId?: shared.ErrorInvalidId;

  @Metadata()
  errorThrottled?: shared.ErrorThrottled;

  @Metadata()
  errorUnauthorized?: shared.ErrorUnauthorized;

  @Metadata()
  statusCode: number;

  @Metadata()
  redactMessage403ApplicationJsonOneOf?: any;

  @Metadata()
  redactMessage422ApplicationJsonOneOf?: any;
}
