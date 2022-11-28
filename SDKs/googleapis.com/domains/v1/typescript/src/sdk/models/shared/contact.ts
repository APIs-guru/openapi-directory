import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// Contact
/** 
 * Details required for a contact associated with a `Registration`.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=faxNumber" })
  faxNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;
}
