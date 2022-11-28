import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGlobalConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchGlobalConfigRequest extends SpeakeasyBase {
    request?: shared.Patch[];
    security: PatchGlobalConfigSecurity;
}
export declare class PatchGlobalConfigResponse extends SpeakeasyBase {
    contentType: string;
    globalConfig?: shared.GlobalConfig;
    statusCode: number;
}
