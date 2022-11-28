import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams extends SpeakeasyBase {
    endDate: Date;
    serviceId: string;
    startDate: Date;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams extends SpeakeasyBase {
    locationId?: string;
    resourceId?: string;
    tzOffset?: number;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysRequest extends SpeakeasyBase {
    pathParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysPathParams;
    queryParams: GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysQueryParams;
}
export declare class GetConsumerV1AvailabilityServiceIdStartDateEndDateDaysResponse extends SpeakeasyBase {
    availabilityDayViewModel?: shared.AvailabilityDayViewModel;
    contentType: string;
    statusCode: number;
}
