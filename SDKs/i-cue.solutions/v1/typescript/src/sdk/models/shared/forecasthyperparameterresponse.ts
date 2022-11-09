import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ForecastHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError"
,    MeanSquaredError = "MeanSquaredError"
,    MeanAbsoluteError = "MeanAbsoluteError"
,    MedianAbsoluteDeviation = "MedianAbsoluteDeviation"
,    None = "None"
}


export class ForecastHyperparameterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @Metadata({ data: "json, name=errorType" })
  errorType?: ForecastHyperparameterResponseErrorTypeEnum;

  @Metadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @Metadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @Metadata({ data: "json, name=periodicity" })
  periodicity?: number;
}
