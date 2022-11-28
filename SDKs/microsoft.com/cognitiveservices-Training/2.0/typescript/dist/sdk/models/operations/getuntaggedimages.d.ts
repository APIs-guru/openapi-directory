import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUntaggedImagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum GetUntaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}
export declare class GetUntaggedImagesQueryParams extends SpeakeasyBase {
    iterationId?: string;
    orderBy?: GetUntaggedImagesOrderByEnum;
    skip?: number;
    take?: number;
}
export declare class GetUntaggedImagesHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetUntaggedImagesRequest extends SpeakeasyBase {
    pathParams: GetUntaggedImagesPathParams;
    queryParams: GetUntaggedImagesQueryParams;
    headers: GetUntaggedImagesHeaders;
}
export declare class GetUntaggedImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    images?: shared.Image[];
    statusCode: number;
}
