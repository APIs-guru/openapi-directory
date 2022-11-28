import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class GlobalConfigRequest extends SpeakeasyBase {
    security: GlobalConfigSecurity;
}
export declare class GlobalConfigResponse extends SpeakeasyBase {
    contentType: string;
    globalConfig?: shared.GlobalConfig;
    statusCode: number;
}
