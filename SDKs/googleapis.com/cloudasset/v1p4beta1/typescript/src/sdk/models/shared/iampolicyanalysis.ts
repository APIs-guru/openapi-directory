import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";


// IamPolicyAnalysis
/** 
 * An analysis message to group the query and results.
**/
export class IamPolicyAnalysis extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @Metadata({ data: "json, name=analysisResults", elemType: shared.IamPolicyAnalysisResult })
  analysisResults?: IamPolicyAnalysisResult[];

  @Metadata({ data: "json, name=fullyExplored" })
  fullyExplored?: boolean;
}
