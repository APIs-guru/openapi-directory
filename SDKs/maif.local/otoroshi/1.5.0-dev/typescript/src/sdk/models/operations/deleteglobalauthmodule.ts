import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteGlobalAuthModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteGlobalAuthModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class DeleteGlobalAuthModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGlobalAuthModulePathParams;

  @Metadata()
  security: DeleteGlobalAuthModuleSecurity;
}


export class DeleteGlobalAuthModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleted?: shared.Deleted;

  @Metadata()
  statusCode: number;
}
