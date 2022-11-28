import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams extends SpeakeasyBase {
    endDate: Date;
    serviceId: string;
    startDate: Date;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams extends SpeakeasyBase {
    duration?: number;
    fullServerBasedAvailability?: boolean;
    locationId?: string;
    resourceId?: string;
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailablePathParams;
    queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableQueryParams;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    unavailableTimeListViewModel?: Map<string, any>;
}
