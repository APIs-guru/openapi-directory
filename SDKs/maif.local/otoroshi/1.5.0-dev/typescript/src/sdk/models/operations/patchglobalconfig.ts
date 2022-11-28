import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchGlobalConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  otoroshiAuth: shared.SchemeOtoroshiAuth;
}


export class PatchGlobalConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Patch })
  request?: shared.Patch[];

  @SpeakeasyMetadata()
  security: PatchGlobalConfigSecurity;
}


export class PatchGlobalConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  globalConfig?: shared.GlobalConfig;

  @SpeakeasyMetadata()
  statusCode: number;
}
