import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";
/**
 * Additional information stored for an organization.
**/
export declare class OrganizationInfo extends SpeakeasyBase {
    address?: PostalAddress;
    phoneNumber?: string;
    registeredDomain?: string;
}
