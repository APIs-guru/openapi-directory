import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
/**
 * The organization policy result to the query.
**/
export declare class OrgPolicyResult extends SpeakeasyBase {
    consolidatedPolicy?: AnalyzerOrgPolicy;
    policyBundle?: AnalyzerOrgPolicy[];
}
