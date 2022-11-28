import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ForecastHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}
export declare class ForecastHyperparameterResponse extends SpeakeasyBase {
    discardData?: boolean;
    errorType?: ForecastHyperparameterResponseErrorTypeEnum;
    holdOutPeriod?: number;
    noFcst?: number;
    periodicity?: number;
}
