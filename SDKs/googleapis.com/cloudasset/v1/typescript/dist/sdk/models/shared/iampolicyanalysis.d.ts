import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisQuery } from "./iampolicyanalysisquery";
import { IamPolicyAnalysisResult } from "./iampolicyanalysisresult";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
/**
 * An analysis message to group the query and results.
**/
export declare class IamPolicyAnalysis extends SpeakeasyBase {
    analysisQuery?: IamPolicyAnalysisQuery;
    analysisResults?: IamPolicyAnalysisResult[];
    fullyExplored?: boolean;
    nonCriticalErrors?: IamPolicyAnalysisState[];
}
