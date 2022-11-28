import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ServiceFeesUpdateModel } from "./servicefeesupdatemodel";
import { ServiceOptionsUpdateModel } from "./serviceoptionsupdatemodel";
import { ServiceSettingsUpdateModel } from "./servicesettingsupdatemodel";
export declare class ServiceUpdateModel extends SpeakeasyBase {
    availability?: AvailabilityInputModel;
    bookingInterval?: number;
    bookingLimit?: number;
    description?: string;
    duration?: number;
    fees?: ServiceFeesUpdateModel;
    locationId?: string;
    maxCapacity?: number;
    maxGroupSize?: number;
    mediaPageUrl?: string;
    name?: string;
    options?: ServiceOptionsUpdateModel;
    public?: boolean;
    serviceGroupId?: string;
    settings?: ServiceSettingsUpdateModel;
    type?: string;
}
