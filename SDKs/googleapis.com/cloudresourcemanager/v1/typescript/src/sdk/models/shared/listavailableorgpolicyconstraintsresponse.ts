import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Constraint } from "./constraint";



// ListAvailableOrgPolicyConstraintsResponse
/** 
 * The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
**/
export class ListAvailableOrgPolicyConstraintsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraints", elemType: Constraint })
  constraints?: Constraint[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
