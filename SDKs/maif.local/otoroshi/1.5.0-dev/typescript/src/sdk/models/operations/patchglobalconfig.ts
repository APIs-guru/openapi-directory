import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchGlobalConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @Metadata()
  security: PatchGlobalConfigSecurity;
}


export class PatchGlobalConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  globalConfig?: shared.GlobalConfig;

  @Metadata()
  statusCode: number;
}
