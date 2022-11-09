import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKeyByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetKeyByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: shared.SchemeCookieSid;
}


export class GetKeyByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetKeyByIdPathParams;

  @Metadata()
  security: GetKeyByIdSecurity;
}


export class GetKeyByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  key?: shared.Key;

  @Metadata()
  statusCode: number;
}
