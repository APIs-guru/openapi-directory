import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastForecastBottomUpHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastForecastBottomUpRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastForecastBottomUpRequest extends SpeakeasyBase {
    headers: PostForecastForecastBottomUpHeaders;
    request?: PostForecastForecastBottomUpRequests;
}
export declare class PostForecastForecastBottomUpResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    forecastBottomUpResponse?: shared.ForecastBottomUpResponse;
    statusCode: number;
}
