import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPublishedSecurity;
}


export class GetPublishedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
