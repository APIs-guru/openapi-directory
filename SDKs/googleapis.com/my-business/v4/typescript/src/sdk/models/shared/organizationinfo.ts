import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// OrganizationInfo
/** 
 * Additional Info stored for an organization.
**/
export class OrganizationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;

  @Metadata({ data: "json, name=registeredDomain" })
  registeredDomain?: string;
}
