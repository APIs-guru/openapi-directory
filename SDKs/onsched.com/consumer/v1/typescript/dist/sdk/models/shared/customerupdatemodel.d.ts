import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AddressUpdateModel } from "./addressupdatemodel";
import { ContactUpdateModel } from "./contactupdatemodel";
import { CustomFieldUpdateModel } from "./customfieldupdatemodel";
export declare class CustomerUpdateModel extends SpeakeasyBase {
    address?: AddressUpdateModel;
    contact?: ContactUpdateModel;
    customFields?: CustomFieldUpdateModel;
    email?: string;
    firstname?: string;
    lastname?: string;
    locationId?: string;
    name?: string;
    notificationType?: string;
    stripeCustomerId?: string;
    type?: number;
}
