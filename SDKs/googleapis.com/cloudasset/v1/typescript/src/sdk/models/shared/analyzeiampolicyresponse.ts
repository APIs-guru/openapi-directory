import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysis } from "./iampolicyanalysis";



// AnalyzeIamPolicyResponse
/** 
 * A response message for AssetService.AnalyzeIamPolicy.
**/
export class AnalyzeIamPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mainAnalysis" })
  mainAnalysis?: IamPolicyAnalysis;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountImpersonationAnalysis", elemType: IamPolicyAnalysis })
  serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
