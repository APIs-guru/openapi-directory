import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastAiHistoryAndForecastHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastAiHistoryAndForecastRequests extends SpeakeasyBase {
    aiPlanningLevelRequest?: shared.AiPlanningLevelRequest;
    aiPlanningLevelRequest1?: shared.AiPlanningLevelRequest;
    aiPlanningLevelRequest2?: shared.AiPlanningLevelRequest;
}
export declare class PostForecastAiHistoryAndForecastRequest extends SpeakeasyBase {
    headers: PostForecastAiHistoryAndForecastHeaders;
    request?: PostForecastAiHistoryAndForecastRequests;
}
export declare class PostForecastAiHistoryAndForecastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    historyAndForecastResponse?: shared.HistoryAndForecastResponse;
    statusCode: number;
}
