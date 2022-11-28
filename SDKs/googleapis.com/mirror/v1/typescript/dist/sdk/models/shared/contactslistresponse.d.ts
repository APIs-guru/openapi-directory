import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
/**
 * A list of Contacts representing contacts. This is the response from the server to GET requests on the contacts collection.
**/
export declare class ContactsListResponse extends SpeakeasyBase {
    items?: Contact[];
    kind?: string;
}
