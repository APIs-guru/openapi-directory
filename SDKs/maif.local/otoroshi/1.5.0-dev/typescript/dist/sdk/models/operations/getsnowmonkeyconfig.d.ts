import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnowMonkeyConfigSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class GetSnowMonkeyConfigRequest extends SpeakeasyBase {
    security: GetSnowMonkeyConfigSecurity;
}
export declare class GetSnowMonkeyConfigResponse extends SpeakeasyBase {
    contentType: string;
    snowMonkeyConfig?: shared.SnowMonkeyConfig;
    statusCode: number;
}
