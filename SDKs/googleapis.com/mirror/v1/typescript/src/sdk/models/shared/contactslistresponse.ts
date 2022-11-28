import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";



// ContactsListResponse
/** 
 * A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
**/
export class ContactsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Contact })
  items?: Contact[];

  @SpeakeasyMetadata()
  kind?: string;
}
