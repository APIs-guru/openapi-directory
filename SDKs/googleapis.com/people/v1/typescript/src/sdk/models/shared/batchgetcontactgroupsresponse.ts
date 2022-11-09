import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactGroupResponse } from "./contactgroupresponse";


// BatchGetContactGroupsResponse
/** 
 * The response to a batch get contact groups request.
**/
export class BatchGetContactGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.ContactGroupResponse })
  responses?: ContactGroupResponse[];
}
