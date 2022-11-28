import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernediampolicy";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernedresource";
/**
 * Represents a GCP asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
**/
export declare class GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset extends SpeakeasyBase {
    consolidatedPolicy?: AnalyzerOrgPolicy;
    governedIamPolicy?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy;
    governedResource?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource;
    policyBundle?: AnalyzerOrgPolicy[];
}
