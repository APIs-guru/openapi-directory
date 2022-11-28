import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastRerunHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastRerunRequests extends SpeakeasyBase {
    planningLevelReRunRequest?: shared.PlanningLevelReRunRequest;
    planningLevelReRunRequest1?: shared.PlanningLevelReRunRequest;
    planningLevelReRunRequest2?: shared.PlanningLevelReRunRequest;
}
export declare class PostForecastRerunRequest extends SpeakeasyBase {
    headers: PostForecastRerunHeaders;
    request?: PostForecastRerunRequests;
}
export declare class PostForecastRerunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    forecastResponse?: shared.ForecastResponse;
    statusCode: number;
}
