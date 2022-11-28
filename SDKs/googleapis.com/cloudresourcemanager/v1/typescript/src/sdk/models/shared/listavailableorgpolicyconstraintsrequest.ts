import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListAvailableOrgPolicyConstraintsRequest
/** 
 * The request sent to the `ListAvailableOrgPolicyConstraints` method on the project, folder, or organization.
**/
export class ListAvailableOrgPolicyConstraintsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
