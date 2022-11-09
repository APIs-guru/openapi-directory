import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RewindHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError"
,    MeanSquaredError = "MeanSquaredError"
,    MeanAbsoluteError = "MeanAbsoluteError"
,    MedianAbsoluteDeviation = "MedianAbsoluteDeviation"
,    None = "None"
}


export class RewindHyperparameterResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=costOfError" })
  costOfError?: number;

  @Metadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @Metadata({ data: "json, name=errorType" })
  errorType?: RewindHyperparameterResponseErrorTypeEnum;

  @Metadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @Metadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @Metadata({ data: "json, name=periodicity" })
  periodicity?: number;

  @Metadata({ data: "json, name=rewindTimeFrame" })
  rewindTimeFrame?: number;
}
