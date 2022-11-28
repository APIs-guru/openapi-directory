import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1ServicegroupsQueryParams extends SpeakeasyBase {
    limit?: number;
    locationId?: string;
    offset?: number;
}
export declare class GetConsumerV1ServicegroupsRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1ServicegroupsQueryParams;
}
export declare class GetConsumerV1ServicegroupsResponse extends SpeakeasyBase {
    contentType: string;
    serviceGroupListViewModel?: Map<string, any>;
    statusCode: number;
}
