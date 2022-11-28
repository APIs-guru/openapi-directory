import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrgPolicy } from "./orgpolicy";



// ListOrgPoliciesResponse
/** 
 * The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
**/
export class ListOrgPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=policies", elemType: OrgPolicy })
  policies?: OrgPolicy[];
}
