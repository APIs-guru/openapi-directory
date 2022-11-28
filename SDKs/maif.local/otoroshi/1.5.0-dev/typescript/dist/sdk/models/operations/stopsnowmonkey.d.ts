import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopSnowMonkeySecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class StopSnowMonkeyRequest extends SpeakeasyBase {
    security: StopSnowMonkeySecurity;
}
export declare class StopSnowMonkeyResponse extends SpeakeasyBase {
    contentType: string;
    done?: shared.Done;
    statusCode: number;
}
