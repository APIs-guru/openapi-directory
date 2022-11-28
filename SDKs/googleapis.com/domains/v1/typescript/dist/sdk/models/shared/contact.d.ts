import { SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";
/**
 * Details required for a contact associated with a `Registration`.
**/
export declare class Contact extends SpeakeasyBase {
    email?: string;
    faxNumber?: string;
    phoneNumber?: string;
    postalAddress?: PostalAddress;
}
