import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListAvailableOrgPolicyConstraintsRequest
/** 
 * The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization.
**/
export class ListAvailableOrgPolicyConstraintsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
