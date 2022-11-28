import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";



// GoogleCloudAssetV1GovernedContainer
/** 
 * The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.
**/
export class GoogleCloudAssetV1GovernedContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consolidatedPolicy" })
  consolidatedPolicy?: AnalyzerOrgPolicy;

  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=policyBundle", elemType: AnalyzerOrgPolicy })
  policyBundle?: AnalyzerOrgPolicy[];
}
