import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConsumerV1ServicesIdResourcesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1ServicesIdResourcesQueryParams extends SpeakeasyBase {
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetConsumerV1ServicesIdResourcesRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ServicesIdResourcesPathParams;
    queryParams: GetConsumerV1ServicesIdResourcesQueryParams;
}
export declare class GetConsumerV1ServicesIdResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceListViewModel?: Map<string, any>;
    statusCode: number;
}
