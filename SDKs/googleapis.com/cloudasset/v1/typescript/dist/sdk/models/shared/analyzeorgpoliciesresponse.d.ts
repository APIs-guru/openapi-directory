import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { OrgPolicyResult } from "./orgpolicyresult";
/**
 * The response message for AssetService.AnalyzeOrgPolicies.
**/
export declare class AnalyzeOrgPoliciesResponse extends SpeakeasyBase {
    constraint?: AnalyzerOrgPolicyConstraint;
    nextPageToken?: string;
    orgPolicyResults?: OrgPolicyResult[];
}
