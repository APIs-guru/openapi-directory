import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlanningLevelInfoRequestErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}
export declare class PlanningLevelInfoRequest extends SpeakeasyBase {
    discardData?: boolean;
    errorType?: PlanningLevelInfoRequestErrorTypeEnum;
    holdOutPeriod?: number;
    noFcst?: number;
    outlierDetection?: boolean;
    periodicity?: number;
}
