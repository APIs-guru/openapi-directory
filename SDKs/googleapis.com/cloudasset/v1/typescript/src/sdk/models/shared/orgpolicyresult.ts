import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";



// OrgPolicyResult
/** 
 * The organization policy result to the query.
**/
export class OrgPolicyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consolidatedPolicy" })
  consolidatedPolicy?: AnalyzerOrgPolicy;

  @SpeakeasyMetadata({ data: "json, name=policyBundle", elemType: AnalyzerOrgPolicy })
  policyBundle?: AnalyzerOrgPolicy[];
}
