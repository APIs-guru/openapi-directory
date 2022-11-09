import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGlobalAuthModulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchGlobalAuthModuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalAuthModuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchGlobalAuthModulePathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchGlobalAuthModuleSecurity;
}


export class PatchGlobalAuthModuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchGlobalAuthModule200ApplicationJsonOneOf?: any;
}
