import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { Options } from "./options";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";
/**
 * A request message for AssetService.ExportIamPolicyAnalysis.
**/
export declare class ExportIamPolicyAnalysisRequest extends SpeakeasyBase {
    analysisQuery?: IamPolicyAnalysisQuery;
    options?: Options;
    outputConfig?: IamPolicyAnalysisOutputConfig;
}
