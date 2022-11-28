import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";



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

  @SpeakeasyMetadata({ data: "json, name=nonCriticalErrors", elemType: IamPolicyAnalysisState })
  nonCriticalErrors?: IamPolicyAnalysisState[];
}
