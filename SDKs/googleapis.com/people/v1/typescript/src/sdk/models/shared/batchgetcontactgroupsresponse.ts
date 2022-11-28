import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroupResponse } from "./contactgroupresponse";



// BatchGetContactGroupsResponse
/** 
 * The response to a batch get contact groups request.
**/
export class BatchGetContactGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: ContactGroupResponse })
  responses?: ContactGroupResponse[];
}
