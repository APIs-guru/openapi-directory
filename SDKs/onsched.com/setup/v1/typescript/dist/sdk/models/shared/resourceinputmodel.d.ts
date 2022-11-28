import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInputModel } from "./addressinputmodel";
import { AvailabilityInputModel } from "./availabilityinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
import { ResourceOptionsInputModel } from "./resourceoptionsinputmodel";
export declare class ResourceInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    availability?: AvailabilityInputModel;
    contact?: ContactInputModel;
    customFields?: CustomFieldInputModel;
    description?: string;
    email?: string;
    groupId?: string;
    locationId?: string;
    name?: string;
    options?: ResourceOptionsInputModel;
    serviceIds?: string[];
    timezoneId?: string;
}
