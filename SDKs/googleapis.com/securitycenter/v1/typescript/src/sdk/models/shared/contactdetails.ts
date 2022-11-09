import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Contact } from "./contact";


// ContactDetails
/** 
 * The details pertaining to specific contacts
**/
export class ContactDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.Contact })
  contacts?: Contact[];
}
