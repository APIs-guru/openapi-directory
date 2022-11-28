import { SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";
/**
 * If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
**/
export declare class BatchUpdateContactsResponse extends SpeakeasyBase {
    updateResult?: Map<string, PersonResponse>;
}
