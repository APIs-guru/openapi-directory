import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConsumerV1ResourcesQueryParams extends SpeakeasyBase {
    email?: string;
    limit?: number;
    locationId?: string;
    name?: string;
    offset?: number;
    resourceGroupId?: number;
    sortOrder?: string;
}
export declare class GetConsumerV1ResourcesRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1ResourcesQueryParams;
}
export declare class GetConsumerV1ResourcesResponse extends SpeakeasyBase {
    contentType: string;
    resourceListViewModel?: Map<string, any>;
    statusCode: number;
}
