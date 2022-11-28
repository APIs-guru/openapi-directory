import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastHistoryAndForecastHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastHistoryAndForecastRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastHistoryAndForecastRequest extends SpeakeasyBase {
    headers: PostForecastHistoryAndForecastHeaders;
    request?: PostForecastHistoryAndForecastRequests;
}
export declare class PostForecastHistoryAndForecastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    historyAndForecastResponse?: shared.HistoryAndForecastResponse;
    statusCode: number;
}
