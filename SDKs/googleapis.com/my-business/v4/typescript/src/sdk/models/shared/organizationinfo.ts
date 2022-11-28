import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// OrganizationInfo
/** 
 * Additional Info stored for an organization.
**/
export class OrganizationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=registeredDomain" })
  registeredDomain?: string;
}
