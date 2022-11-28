import { SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";
/**
 * If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
**/
export declare class BatchCreateContactsResponse extends SpeakeasyBase {
    createdPeople?: PersonResponse[];
}
