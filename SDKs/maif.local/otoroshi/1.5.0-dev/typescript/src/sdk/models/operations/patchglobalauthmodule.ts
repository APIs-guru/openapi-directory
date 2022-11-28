import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGlobalAuthModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchGlobalAuthModuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalAuthModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchGlobalAuthModulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchGlobalAuthModuleSecurity;
}


export class PatchGlobalAuthModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchGlobalAuthModule200ApplicationJsonOneOf?: any;
}
