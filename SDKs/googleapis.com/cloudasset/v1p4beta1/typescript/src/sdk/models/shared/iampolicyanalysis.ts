import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";



// IamPolicyAnalysis
/** 
 * An analysis message to group the query and results.
**/
export class IamPolicyAnalysis extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @SpeakeasyMetadata({ data: "json, name=analysisResults", elemType: IamPolicyAnalysisResult })
  analysisResults?: IamPolicyAnalysisResult[];

  @SpeakeasyMetadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;
}
