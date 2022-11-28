import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetSnowMonkeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ResetSnowMonkeyRequest extends SpeakeasyBase {
    security: ResetSnowMonkeySecurity;
}
export declare class ResetSnowMonkeyResponse extends SpeakeasyBase {
    contentType: string;
    done?: shared.Done;
    statusCode: number;
}
