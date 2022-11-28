import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset } from "./googlecloudassetv1analyzeorgpolicygovernedassetsresponsegovernedasset";



// AnalyzeOrgPolicyGovernedAssetsResponse
/** 
 * The response message for AssetService.AnalyzeOrgPolicyGovernedAssets.
**/
export class AnalyzeOrgPolicyGovernedAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: AnalyzerOrgPolicyConstraint;

  @SpeakeasyMetadata({ data: "json, name=governedAssets", elemType: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset })
  governedAssets?: GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
