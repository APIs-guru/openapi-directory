import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonResponse } from "./personresponse";


// GetPeopleResponse
/** 
 * The response to a get request for a list of people by resource name.
**/
export class GetPeopleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.PersonResponse })
  responses?: PersonResponse[];
}
