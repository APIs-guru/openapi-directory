import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents performance data for a particular tag in a trained iteration
**/
export declare class TagPerformance extends SpeakeasyBase {
    id?: string;
    name?: string;
    precision?: number;
    precisionStdDeviation?: number;
    recall?: number;
    recallStdDeviation?: number;
}
