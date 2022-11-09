import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HyperparameterModelErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError"
,    MeanSquaredError = "MeanSquaredError"
,    MeanAbsoluteError = "MeanAbsoluteError"
,    MedianAbsoluteDeviation = "MedianAbsoluteDeviation"
,    None = "None"
}


export class HyperparameterModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=abcClassificationThresholdA" })
  abcClassificationThresholdA?: number;

  @Metadata({ data: "json, name=abcClassificationThresholdB" })
  abcClassificationThresholdB?: number;

  @Metadata({ data: "json, name=abcClassificationThresholdC" })
  abcClassificationThresholdC?: number;

  @Metadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @Metadata({ data: "json, name=errorType" })
  errorType?: HyperparameterModelErrorTypeEnum;

  @Metadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @Metadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @Metadata({ data: "json, name=outlierDetection" })
  outlierDetection?: boolean;

  @Metadata({ data: "json, name=periodicity" })
  periodicity?: number;

  @Metadata({ data: "json, name=xyzClassificationThresholdX" })
  xyzClassificationThresholdX?: number;

  @Metadata({ data: "json, name=xyzClassificationThresholdY" })
  xyzClassificationThresholdY?: number;

  @Metadata({ data: "json, name=xyzClassificationThresholdZ" })
  xyzClassificationThresholdZ?: number;
}
