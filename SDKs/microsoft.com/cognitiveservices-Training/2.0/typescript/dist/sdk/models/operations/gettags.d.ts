import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetTagsQueryParams extends SpeakeasyBase {
    iterationId?: string;
}
export declare class GetTagsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetTagsRequest extends SpeakeasyBase {
    pathParams: GetTagsPathParams;
    queryParams: GetTagsQueryParams;
    headers: GetTagsHeaders;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tags?: shared.Tag[];
}
