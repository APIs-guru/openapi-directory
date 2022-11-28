import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlanningLevelHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}
export declare class PlanningLevelHyperparameterResponse extends SpeakeasyBase {
    discardData?: boolean;
    errorType?: PlanningLevelHyperparameterResponseErrorTypeEnum;
    holdOutPeriod?: number;
    noFcst?: number;
    periodicity?: number;
}
