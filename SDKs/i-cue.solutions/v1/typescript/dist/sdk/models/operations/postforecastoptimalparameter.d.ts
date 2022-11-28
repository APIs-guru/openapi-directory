import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostForecastOptimalParameterHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class PostForecastOptimalParameterRequests extends SpeakeasyBase {
    planningLevelRequest?: shared.PlanningLevelRequest;
    planningLevelRequest1?: shared.PlanningLevelRequest;
    planningLevelRequest2?: shared.PlanningLevelRequest;
}
export declare class PostForecastOptimalParameterRequest extends SpeakeasyBase {
    headers: PostForecastOptimalParameterHeaders;
    request?: PostForecastOptimalParameterRequests;
}
export declare class PostForecastOptimalParameterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    optimalParameterResponse?: shared.OptimalParameterResponse;
    statusCode: number;
}
