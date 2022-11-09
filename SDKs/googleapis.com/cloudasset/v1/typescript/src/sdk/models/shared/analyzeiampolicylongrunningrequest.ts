import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";


// AnalyzeIamPolicyLongrunningRequest
/** 
 * A request message for AssetService.AnalyzeIamPolicyLongrunning.
**/
export class AnalyzeIamPolicyLongrunningRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: IamPolicyAnalysisOutputConfig;

  @Metadata({ data: "json, name=savedAnalysisQuery" })
  savedAnalysisQuery?: string;
}
