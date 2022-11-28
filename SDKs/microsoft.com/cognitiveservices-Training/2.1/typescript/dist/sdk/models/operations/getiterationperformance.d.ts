import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIterationPerformancePathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class GetIterationPerformanceQueryParams extends SpeakeasyBase {
    overlapThreshold?: number;
    threshold?: number;
}
export declare class GetIterationPerformanceHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetIterationPerformanceRequest extends SpeakeasyBase {
    pathParams: GetIterationPerformancePathParams;
    queryParams: GetIterationPerformanceQueryParams;
    headers: GetIterationPerformanceHeaders;
}
export declare class GetIterationPerformanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    iterationPerformance?: shared.IterationPerformance;
    statusCode: number;
}
