import { SpeakeasyBase } from "../../../internal/utils";
export declare enum HyperparameterModelErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}
export declare class HyperparameterModel extends SpeakeasyBase {
    abcClassificationThresholdA?: number;
    abcClassificationThresholdB?: number;
    abcClassificationThresholdC?: number;
    discardData?: boolean;
    errorType?: HyperparameterModelErrorTypeEnum;
    holdOutPeriod?: number;
    noFcst?: number;
    outlierDetection?: boolean;
    periodicity?: number;
    xyzClassificationThresholdX?: number;
    xyzClassificationThresholdY?: number;
    xyzClassificationThresholdZ?: number;
}
