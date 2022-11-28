import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";



// AnalyzeIamPolicyLongrunningRequest
/** 
 * A request message for AssetService.AnalyzeIamPolicyLongrunning.
**/
export class AnalyzeIamPolicyLongrunningRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: IamPolicyAnalysisOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=savedAnalysisQuery" })
  savedAnalysisQuery?: string;
}
