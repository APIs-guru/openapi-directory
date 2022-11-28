import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastFullDetailHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastFullDetailRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastFullDetailRequest extends SpeakeasyBase {
    headers: PostForecastFullDetailHeaders;
    request?: PostForecastFullDetailRequests;
}
export declare class PostForecastFullDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fullDetailsForecastResponse?: shared.FullDetailsForecastResponse;
    statusCode: number;
}
