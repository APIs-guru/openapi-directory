import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// Contact
/** 
 * Details required for a contact associated with a `Registration`.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=faxNumber" })
  faxNumber?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postalAddress" })
  postalAddress?: PostalAddress;
}
