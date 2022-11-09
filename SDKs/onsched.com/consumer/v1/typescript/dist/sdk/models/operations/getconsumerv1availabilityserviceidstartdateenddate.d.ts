import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams extends SpeakeasyBase {
    endDate: Date;
    serviceId: string;
    startDate: Date;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams extends SpeakeasyBase {
    dayAvailability?: number;
    dayAvailabilityStartDate?: Date;
    destination?: string;
    duration?: number;
    endTime?: number;
    firstDayAvailable?: boolean;
    fullServerBasedAvailability?: boolean;
    interval?: number;
    locationId?: string;
    resourceGroupId?: string;
    resourceId?: string;
    resourceIds?: string;
    roundRobin?: string;
    startTime?: number;
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDatePathParams;
    queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateQueryParams;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateResponse extends SpeakeasyBase {
    availabilityViewModel?: shared.AvailabilityViewModel;
    contentType: string;
    statusCode: number;
}
