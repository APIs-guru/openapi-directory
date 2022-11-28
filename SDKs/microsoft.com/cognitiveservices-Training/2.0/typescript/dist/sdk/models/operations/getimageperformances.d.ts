import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagePerformancesPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare enum GetImagePerformancesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}
export declare class GetImagePerformancesQueryParams extends SpeakeasyBase {
    orderBy?: GetImagePerformancesOrderByEnum;
    skip?: number;
    tagIds?: string[];
    take?: number;
}
export declare class GetImagePerformancesHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetImagePerformancesRequest extends SpeakeasyBase {
    pathParams: GetImagePerformancesPathParams;
    queryParams: GetImagePerformancesQueryParams;
    headers: GetImagePerformancesHeaders;
}
export declare class GetImagePerformancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    imagePerformances?: shared.ImagePerformance[];
    statusCode: number;
}
