import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutRequestIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutRequestIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutRequestIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRequestIdPathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PutRequestIdSecurity;
}


export class PutRequestIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
