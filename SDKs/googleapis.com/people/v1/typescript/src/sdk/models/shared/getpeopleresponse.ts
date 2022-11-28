import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";



// GetPeopleResponse
/** 
 * The response to a get request for a list of people by resource name.
**/
export class GetPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: PersonResponse })
  responses?: PersonResponse[];
}
