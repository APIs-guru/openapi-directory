import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IamPolicyAnalysis } from "./iampolicyanalysis";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";
import { IamPolicyAnalysis } from "./iampolicyanalysis";


// AnalyzeIamPolicyResponse
/** 
 * A response message for AssetService.AnalyzeIamPolicy.
**/
export class AnalyzeIamPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;

  @Metadata({ data: "json, name=mainAnalysis" })
  mainAnalysis?: IamPolicyAnalysis;

  @Metadata({ data: "json, name=nonCriticalErrors", elemType: shared.GoogleCloudAssetV1p4beta1AnalysisState })
  nonCriticalErrors?: GoogleCloudAssetV1p4beta1AnalysisState[];

  @Metadata({ data: "json, name=serviceAccountImpersonationAnalysis", elemType: shared.IamPolicyAnalysis })
  serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
