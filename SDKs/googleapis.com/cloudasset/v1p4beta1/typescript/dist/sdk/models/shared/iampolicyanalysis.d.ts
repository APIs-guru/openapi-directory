import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";
/**
 * An analysis message to group the query and results.
**/
export declare class IamPolicyAnalysis extends SpeakeasyBase {
    analysisQuery?: IamPolicyAnalysisQuery;
    analysisResults?: IamPolicyAnalysisResult[];
    fullyExplored?: boolean;
}
