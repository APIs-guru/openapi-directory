import { SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";
/**
 * Additional Info stored for an organization.
**/
export declare class OrganizationInfo extends SpeakeasyBase {
    phoneNumber?: string;
    postalAddress?: PostalAddress;
    registeredDomain?: string;
}
