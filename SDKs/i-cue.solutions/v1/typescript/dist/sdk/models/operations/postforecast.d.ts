import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastRequest extends SpeakeasyBase {
    headers: PostForecastHeaders;
    request?: PostForecastRequests;
}
export declare class PostForecastResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    forecastResponse?: shared.ForecastResponse;
    statusCode: number;
}
