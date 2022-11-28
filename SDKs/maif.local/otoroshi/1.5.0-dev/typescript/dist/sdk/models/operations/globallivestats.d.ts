import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GlobalLiveStatsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class GlobalLiveStatsRequest extends SpeakeasyBase {
    security: GlobalLiveStatsSecurity;
}
export declare class GlobalLiveStatsResponse extends SpeakeasyBase {
    contentType: string;
    stats?: shared.Stats;
    statusCode: number;
}
