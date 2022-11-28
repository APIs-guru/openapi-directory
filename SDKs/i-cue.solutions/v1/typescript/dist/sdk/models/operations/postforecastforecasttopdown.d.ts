import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastForecastTopDownHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastForecastTopDownRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastForecastTopDownRequest extends SpeakeasyBase {
    headers: PostForecastForecastTopDownHeaders;
    request?: PostForecastForecastTopDownRequests;
}
export declare class PostForecastForecastTopDownResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
