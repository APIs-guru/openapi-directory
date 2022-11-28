import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RewindHyperparameterResponseErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError",
    MeanSquaredError = "MeanSquaredError",
    MeanAbsoluteError = "MeanAbsoluteError",
    MedianAbsoluteDeviation = "MedianAbsoluteDeviation",
    None = "None"
}


export class RewindHyperparameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costOfError" })
  costOfError?: number;

  @SpeakeasyMetadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: RewindHyperparameterResponseErrorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @SpeakeasyMetadata({ data: "json, name=periodicity" })
  periodicity?: number;

  @SpeakeasyMetadata({ data: "json, name=rewindTimeFrame" })
  rewindTimeFrame?: number;
}
