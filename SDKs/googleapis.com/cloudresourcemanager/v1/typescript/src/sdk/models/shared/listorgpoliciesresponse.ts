import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrgPolicy } from "./orgpolicy";


// ListOrgPoliciesResponse
/** 
 * The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
**/
export class ListOrgPoliciesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=policies", elemType: shared.OrgPolicy })
  policies?: OrgPolicy[];
}
