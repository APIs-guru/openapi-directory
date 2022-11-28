import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRequestIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutRequestIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutRequestIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRequestIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PutRequestIdSecurity;
}


export class PutRequestIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
