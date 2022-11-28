import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartSnowMonkeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class StartSnowMonkeyRequest extends SpeakeasyBase {
    security: StartSnowMonkeySecurity;
}
export declare class StartSnowMonkeyResponse extends SpeakeasyBase {
    contentType: string;
    done?: shared.Done;
    statusCode: number;
}
