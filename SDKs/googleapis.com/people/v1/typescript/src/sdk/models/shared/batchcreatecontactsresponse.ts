import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";



// BatchCreateContactsResponse
/** 
 * If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
**/
export class BatchCreateContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdPeople", elemType: PersonResponse })
  createdPeople?: PersonResponse[];
}
