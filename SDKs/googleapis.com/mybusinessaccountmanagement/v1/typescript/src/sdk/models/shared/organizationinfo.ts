import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// OrganizationInfo
/** 
 * Additional information stored for an organization.
**/
export class OrganizationInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=registeredDomain" })
  registeredDomain?: string;
}


// OrganizationInfoInput
/** 
 * Additional information stored for an organization.
**/
export class OrganizationInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;
}
