import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysis } from "./iampolicyanalysis";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";
/**
 * A response message for AssetService.AnalyzeIamPolicy.
**/
export declare class AnalyzeIamPolicyResponse extends SpeakeasyBase {
    fullyExplored?: boolean;
    mainAnalysis?: IamPolicyAnalysis;
    nonCriticalErrors?: GoogleCloudAssetV1p4beta1AnalysisState[];
    serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
