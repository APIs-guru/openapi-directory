import { SpeakeasyBase } from "../../../internal/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
import { ResourceOptionsUpdateModel } from "./resourceoptionsupdatemodel";
export declare class ResourceUpdateModel extends SpeakeasyBase {
    address?: AddressUpdateModel;
    availability?: AvailabilityInputModel;
    contact?: ContactUpdateModel;
    customFields?: CustomFieldUpdateModel;
    description?: string;
    email?: string;
    groupId?: string;
    locationId?: string;
    name?: string;
    options?: ResourceOptionsUpdateModel;
    serviceIds?: string[];
    timezoneId?: string;
}
