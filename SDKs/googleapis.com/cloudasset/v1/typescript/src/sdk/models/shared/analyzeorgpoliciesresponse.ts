import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { OrgPolicyResult } from "./orgpolicyresult";



// AnalyzeOrgPoliciesResponse
/** 
 * The response message for AssetService.AnalyzeOrgPolicies.
**/
export class AnalyzeOrgPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: AnalyzerOrgPolicyConstraint;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=orgPolicyResults", elemType: OrgPolicyResult })
  orgPolicyResults?: OrgPolicyResult[];
}
