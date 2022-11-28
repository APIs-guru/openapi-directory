import { SpeakeasyBase } from "../../../internal/utils";
export declare class ServiceAllocationInputModel extends SpeakeasyBase {
    allDay?: boolean;
    bookingLimit?: number;
    endDate?: Date;
    endTime?: number;
    locationId?: string;
    reason?: string;
    repeats?: boolean;
    resourceId?: string;
    startDate?: Date;
    startTime?: number;
}
