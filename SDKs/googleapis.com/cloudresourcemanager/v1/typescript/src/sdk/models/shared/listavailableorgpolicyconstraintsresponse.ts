import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Constraint } from "./constraint";


// ListAvailableOrgPolicyConstraintsResponse
/** 
 * The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
**/
export class ListAvailableOrgPolicyConstraintsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=constraints", elemType: shared.Constraint })
  constraints?: Constraint[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
