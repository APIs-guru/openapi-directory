import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetImagePerformanceCountPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class GetImagePerformanceCountQueryParams extends SpeakeasyBase {
    tagIds?: string[];
}
export declare class GetImagePerformanceCountHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetImagePerformanceCountRequest extends SpeakeasyBase {
    pathParams: GetImagePerformanceCountPathParams;
    queryParams: GetImagePerformanceCountQueryParams;
    headers: GetImagePerformanceCountHeaders;
}
export declare class GetImagePerformanceCountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getImagePerformanceCount200ApplicationJsonInt32Integer?: number;
    getImagePerformanceCount200TextJsonInt32Integer?: number;
    statusCode: number;
}
