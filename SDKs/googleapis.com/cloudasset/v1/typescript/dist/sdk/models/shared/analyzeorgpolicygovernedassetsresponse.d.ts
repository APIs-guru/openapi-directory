import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernedasset";
/**
 * The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.
**/
export declare class AnalyzeOrgPolicyGovernedAssetsResponse extends SpeakeasyBase {
    constraint?: AnalyzerOrgPolicyConstraint;
    governedAssets?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset[];
    nextPageToken?: string;
}
