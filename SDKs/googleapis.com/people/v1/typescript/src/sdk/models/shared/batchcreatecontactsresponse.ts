import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonResponse } from "./personresponse";


// BatchCreateContactsResponse
/** 
 * If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
**/
export class BatchCreateContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdPeople", elemType: shared.PersonResponse })
  createdPeople?: PersonResponse[];
}
