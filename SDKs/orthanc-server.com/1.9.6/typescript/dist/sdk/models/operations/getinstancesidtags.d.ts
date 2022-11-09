import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdTagsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdTagsQueryParams extends SpeakeasyBase {
    ignoreLength?: string[];
    short?: boolean;
    simplify?: boolean;
}
export declare class GetInstancesIdTagsRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdTagsPathParams;
    queryParams: GetInstancesIdTagsQueryParams;
}
export declare class GetInstancesIdTagsResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdTags200ApplicationJsonAny?: any;
    statusCode: number;
}
