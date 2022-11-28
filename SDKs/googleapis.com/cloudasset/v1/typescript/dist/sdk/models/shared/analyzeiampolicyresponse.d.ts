import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysis } from "./iampolicyanalysis";
/**
 * A response message for AssetService.AnalyzeIamPolicy.
**/
export declare class AnalyzeIamPolicyResponse extends SpeakeasyBase {
    fullyExplored?: boolean;
    mainAnalysis?: IamPolicyAnalysis;
    serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
