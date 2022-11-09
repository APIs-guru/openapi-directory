import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// OrganizationInfo
/** 
 * Additional information stored for an organization.
**/
export class OrganizationInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostalAddress;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=registeredDomain" })
  registeredDomain?: string;
}
