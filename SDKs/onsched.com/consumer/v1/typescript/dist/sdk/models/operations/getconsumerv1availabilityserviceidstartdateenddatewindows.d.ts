import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams extends SpeakeasyBase {
    endDate: Date;
    serviceId: string;
    startDate: Date;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams extends SpeakeasyBase {
    destination?: string;
    duration?: number;
    interval?: number;
    locationId?: string;
    resourceGroupId?: string;
    resourceId?: string;
    resourceIds?: string;
    roundRobin?: string;
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsPathParams;
    queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsQueryParams;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateWindowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    windowAvailabilityViewModel?: shared.WindowAvailabilityViewModel;
}
