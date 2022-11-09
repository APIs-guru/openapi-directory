import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdSimplifiedTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdSimplifiedTagsQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
}
export declare class GetInstancesIdSimplifiedTagsRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdSimplifiedTagsPathParams;
    queryParams: GetInstancesIdSimplifiedTagsQueryParams;
}
export declare class GetInstancesIdSimplifiedTagsResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdSimplifiedTags200ApplicationJsonAny?: any;
    statusCode: number;
}
