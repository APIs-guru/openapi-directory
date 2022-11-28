import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSnowMonkeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateSnowMonkeyRequest extends SpeakeasyBase {
    request?: shared.Group;
    security: UpdateSnowMonkeySecurity;
}
export declare class UpdateSnowMonkeyResponse extends SpeakeasyBase {
    contentType: string;
    snowMonkeyConfig?: shared.SnowMonkeyConfig;
    statusCode: number;
}
