import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressInputModel } from "./addressinputmodel";
import { ContactInputModel } from "./contactinputmodel";
import { CustomFieldInputModel } from "./customfieldinputmodel";
export declare class CustomerInputModel extends SpeakeasyBase {
    address?: AddressInputModel;
    contact?: ContactInputModel;
    customFields?: CustomFieldInputModel;
    email?: string;
    firstname?: string;
    lastname?: string;
    locationId?: string;
    name?: string;
    notificationType?: string;
    sendLeadNotification?: boolean;
    stripeCustomerId?: string;
    type?: number;
}
