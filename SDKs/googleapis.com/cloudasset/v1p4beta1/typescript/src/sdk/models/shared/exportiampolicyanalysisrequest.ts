import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { Options } from "./options";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";



// ExportIamPolicyAnalysisRequest
/** 
 * A request message for AssetService.ExportIamPolicyAnalysis.
**/
export class ExportIamPolicyAnalysisRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: IamPolicyAnalysisOutputConfig;
}
