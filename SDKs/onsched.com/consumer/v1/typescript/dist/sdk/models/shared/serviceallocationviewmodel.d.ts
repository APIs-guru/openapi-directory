import { SpeakeasyBase } from "../../../internal/utils";
import { RepeatViewModel } from "./repeatviewmodel";
export declare class ServiceAllocationViewModel extends SpeakeasyBase {
    bookingCount?: number;
    bookingLimit?: number;
    endDate?: string;
    endTime?: number;
    id?: string;
    locationId?: string;
    objectName?: string;
    reason?: string;
    repeat?: RepeatViewModel;
    repeats?: boolean;
    resourceDescription?: string;
    resourceId?: string;
    resourceImageUrl?: string;
    resourceName?: string;
    serviceDescription?: string;
    serviceDuration?: number;
    serviceId?: string;
    serviceImageUrl?: string;
    serviceName?: string;
    startDate?: string;
    startTime?: number;
    timezoneName?: string;
    timezoneOffset?: number;
}
