import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";



// BatchUpdateContactsResponse
/** 
 * If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
**/
export class BatchUpdateContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=updateResult", elemType: PersonResponse })
  updateResult?: Map<string, PersonResponse>;
}
