import { SpeakeasyBase } from "../../../internal/utils";
import { TagPerformance } from "./tagperformance";
/**
 * Represents the detailed performance data for a trained iteration
**/
export declare class IterationPerformance extends SpeakeasyBase {
    averagePrecision?: number;
    perTagPerformance?: TagPerformance[];
    precision?: number;
    precisionStdDeviation?: number;
    recall?: number;
    recallStdDeviation?: number;
}
