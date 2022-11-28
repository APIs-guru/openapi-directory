import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisOutputConfig } from "./iampolicyanalysisoutputconfig";
/**
 * A request message for AssetService.AnalyzeIamPolicyLongrunning.
**/
export declare class AnalyzeIamPolicyLongrunningRequest extends SpeakeasyBase {
    analysisQuery?: IamPolicyAnalysisQuery;
    outputConfig?: IamPolicyAnalysisOutputConfig;
    savedAnalysisQuery?: string;
}
