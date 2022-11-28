import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



// ContactDetails
/** 
 * The details pertaining to specific contacts
**/
export class ContactDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: Contact })
  contacts?: Contact[];
}
