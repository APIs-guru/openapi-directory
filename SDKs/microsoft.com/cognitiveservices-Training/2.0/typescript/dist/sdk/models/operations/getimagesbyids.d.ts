import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImagesByIdsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetImagesByIdsQueryParams extends SpeakeasyBase {
    imageIds?: string[];
    iterationId?: string;
}
export declare class GetImagesByIdsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetImagesByIdsRequest extends SpeakeasyBase {
    pathParams: GetImagesByIdsPathParams;
    queryParams: GetImagesByIdsQueryParams;
    headers: GetImagesByIdsHeaders;
}
export declare class GetImagesByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    images?: shared.Image[];
    statusCode: number;
}
