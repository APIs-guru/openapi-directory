import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutGlobalConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PutGlobalConfigRequest extends SpeakeasyBase {
    request?: shared.GlobalConfig;
    security: PutGlobalConfigSecurity;
}
export declare class PutGlobalConfigResponse extends SpeakeasyBase {
    contentType: string;
    globalConfig?: shared.GlobalConfig;
    statusCode: number;
}
