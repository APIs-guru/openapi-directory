import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RewindHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}
export declare class RewindHyperparameterResponse extends SpeakeasyBase {
    costOfError?: number;
    discardData?: boolean;
    errorType?: RewindHyperparameterResponseErrorTypeEnum;
    holdOutPeriod?: number;
    noFcst?: number;
    periodicity?: number;
    rewindTimeFrame?: number;
}
