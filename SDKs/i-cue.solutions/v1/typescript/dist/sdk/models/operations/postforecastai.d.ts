import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastAiHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastAiRequests extends SpeakeasyBase {
    aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;
    aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;
    aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}
export declare class PostForecastAiRequest extends SpeakeasyBase {
    headers: PostForecastAiHeaders;
    request?: PostForecastAiRequests;
}
export declare class PostForecastAiResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    forecastResponse?: shared.ForecastResponse;
    statusCode: number;
}
