import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysis } from "./iampolicyanalysis";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";



// AnalyzeIamPolicyResponse
/** 
 * A response message for AssetService.AnalyzeIamPolicy.
**/
export class AnalyzeIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mainAnalysis" })
  mainAnalysis?: IamPolicyAnalysis;

  @SpeakeasyMetadata({ data: "json, name=nonCriticalErrors", elemType: GoogleCloudAssetV1p4beta1AnalysisState })
  nonCriticalErrors?: GoogleCloudAssetV1p4beta1AnalysisState[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountImpersonationAnalysis", elemType: IamPolicyAnalysis })
  serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
