import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernediampolicy";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernedresource";



// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset
/** 
 * Represents a GCP asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
**/
export class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consolidatedPolicy" })
  consolidatedPolicy?: AnalyzerOrgPolicy;

  @SpeakeasyMetadata({ data: "json, name=governedIamPolicy" })
  governedIamPolicy?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy;

  @SpeakeasyMetadata({ data: "json, name=governedResource" })
  governedResource?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource;

  @SpeakeasyMetadata({ data: "json, name=policyBundle", elemType: AnalyzerOrgPolicy })
  policyBundle?: AnalyzerOrgPolicy[];
}
