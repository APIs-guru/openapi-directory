import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchSnowMonkeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchSnowMonkeyRequest extends SpeakeasyBase {
    request?: shared.Group;
    security: PatchSnowMonkeySecurity;
}
export declare class PatchSnowMonkeyResponse extends SpeakeasyBase {
    contentType: string;
    snowMonkeyConfig?: shared.SnowMonkeyConfig;
    statusCode: number;
}
