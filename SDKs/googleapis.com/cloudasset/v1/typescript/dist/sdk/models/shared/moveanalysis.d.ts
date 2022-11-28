import { SpeakeasyBase } from "../../../internal/utils";
import { MoveAnalysisResult } from "./moveanalysisresult";
import { Status } from "./status";
/**
 * A message to group the analysis information.
**/
export declare class MoveAnalysis extends SpeakeasyBase {
    analysis?: MoveAnalysisResult;
    displayName?: string;
    error?: Status;
}
