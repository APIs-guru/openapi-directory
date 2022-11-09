import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FindGlobalAuthModuleByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FindGlobalAuthModuleByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class FindGlobalAuthModuleByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindGlobalAuthModuleByIdPathParams;

  @Metadata()
  security: FindGlobalAuthModuleByIdSecurity;
}


export class FindGlobalAuthModuleByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  findGlobalAuthModuleById200ApplicationJsonOneOf?: any;
}
