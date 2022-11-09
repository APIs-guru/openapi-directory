import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams extends SpeakeasyBase {
    endDate: Date;
    serviceId: string;
    startDate: Date;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams extends SpeakeasyBase {
    dayAvailability?: number;
    dayAvailabilityStartDate?: Date;
    destination?: string;
    duration?: number;
    endTime?: number;
    firstDayAvailable?: boolean;
    interval?: number;
    locationId?: string;
    resourceGroupId?: string;
    resourceId?: string;
    resourceIds?: string;
    roundRobin?: string;
    startTime?: number;
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesPathParams;
    queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesQueryParams;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateTimesResponse extends SpeakeasyBase {
    availability3ViewModel?: shared.Availability3ViewModel;
    contentType: string;
    statusCode: number;
}
