import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteImageTagsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteImageTagsQueryParams extends SpeakeasyBase {
    imageIds: string[];
    tagIds: string[];
}
export declare class DeleteImageTagsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteImageTagsRequest extends SpeakeasyBase {
    pathParams: DeleteImageTagsPathParams;
    queryParams: DeleteImageTagsQueryParams;
    headers: DeleteImageTagsHeaders;
}
export declare class DeleteImageTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
