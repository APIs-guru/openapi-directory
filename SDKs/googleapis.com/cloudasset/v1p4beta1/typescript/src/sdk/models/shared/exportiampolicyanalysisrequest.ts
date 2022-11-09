import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { Options } from "./options";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";


// ExportIamPolicyAnalysisRequest
/** 
 * A request message for AssetService.ExportIamPolicyAnalysis.
**/
export class ExportIamPolicyAnalysisRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=analysisQuery" })
  analysisQuery?: IamPolicyAnalysisQuery;

  @Metadata({ data: "json, name=options" })
  options?: Options;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: IamPolicyAnalysisOutputConfig;
}
