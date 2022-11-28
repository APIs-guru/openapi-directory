import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1ServicesIdAllocationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetConsumerV1ServicesIdAllocationsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    limit?: number;
    locationId?: string;
    offset?: number;
    resourceId?: string;
    startDate?: Date;
}
export declare class GetConsumerV1ServicesIdAllocationsRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1ServicesIdAllocationsPathParams;
    queryParams: GetConsumerV1ServicesIdAllocationsQueryParams;
}
export declare class GetConsumerV1ServicesIdAllocationsResponse extends SpeakeasyBase {
    contentType: string;
    serviceAllocationListViewModel?: Map<string, any>;
    statusCode: number;
}
