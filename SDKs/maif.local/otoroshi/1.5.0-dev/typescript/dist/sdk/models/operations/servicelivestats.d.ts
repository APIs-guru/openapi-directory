import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServiceLiveStatsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ServiceLiveStatsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class ServiceLiveStatsRequest extends SpeakeasyBase {
    pathParams: ServiceLiveStatsPathParams;
    security: ServiceLiveStatsSecurity;
}
export declare class ServiceLiveStatsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    stats?: shared.Stats;
    statusCode: number;
}
