import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum HyperparameterModelErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}


export class HyperparameterModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abcClassificationThresholdA" })
  abcClassificationThresholdA?: number;

  @SpeakeasyMetadata({ data: "json, name=abcClassificationThresholdB" })
  abcClassificationThresholdB?: number;

  @SpeakeasyMetadata({ data: "json, name=abcClassificationThresholdC" })
  abcClassificationThresholdC?: number;

  @SpeakeasyMetadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: HyperparameterModelErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @SpeakeasyMetadata({ data: "json, name=outlierDetection" })
  outlierDetection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=periodicity" })
  periodicity?: number;

  @SpeakeasyMetadata({ data: "json, name=xyzClassificationThresholdX" })
  xyzClassificationThresholdX?: number;

  @SpeakeasyMetadata({ data: "json, name=xyzClassificationThresholdY" })
  xyzClassificationThresholdY?: number;

  @SpeakeasyMetadata({ data: "json, name=xyzClassificationThresholdZ" })
  xyzClassificationThresholdZ?: number;
}
