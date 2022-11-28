import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaggedImagesPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum GetTaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}
export declare class GetTaggedImagesQueryParams extends SpeakeasyBase {
    iterationId?: string;
    orderBy?: GetTaggedImagesOrderByEnum;
    skip?: number;
    tagIds?: string[];
    take?: number;
}
export declare class GetTaggedImagesHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetTaggedImagesRequest extends SpeakeasyBase {
    pathParams: GetTaggedImagesPathParams;
    queryParams: GetTaggedImagesQueryParams;
    headers: GetTaggedImagesHeaders;
}
export declare class GetTaggedImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    images?: shared.Image[];
    statusCode: number;
}
