import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetConsumerV1ServicesQueryParams extends SpeakeasyBase {
    allLocations?: boolean;
    defaultService?: boolean;
    limit?: number;
    locationId?: string;
    name?: string;
    offset?: number;
    scope?: number;
    serviceGroupId?: number;
    serviceId?: string;
    sortDescending?: boolean;
    sortOrder?: number;
}
export declare class GetConsumerV1ServicesRequest extends SpeakeasyBase {
    queryParams: GetConsumerV1ServicesQueryParams;
}
export declare class GetConsumerV1ServicesResponse extends SpeakeasyBase {
    contentType: string;
    serviceListViewModel?: Map<string, any>;
    statusCode: number;
}
