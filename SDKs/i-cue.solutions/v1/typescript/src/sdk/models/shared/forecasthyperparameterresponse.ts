import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ForecastHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}


export class ForecastHyperparameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: ForecastHyperparameterResponseErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @SpeakeasyMetadata({ data: "json, name=periodicity" })
  periodicity?: number;
}
