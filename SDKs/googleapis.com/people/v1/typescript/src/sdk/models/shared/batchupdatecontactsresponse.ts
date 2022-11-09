import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonResponse } from "./personresponse";


// BatchUpdateContactsResponse
/** 
 * If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.
**/
export class BatchUpdateContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=updateResult", elemType: shared.PersonResponse })
  updateResult?: Map<string, PersonResponse>;
}
