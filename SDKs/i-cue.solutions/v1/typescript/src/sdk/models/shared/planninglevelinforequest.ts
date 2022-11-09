import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PlanningLevelInfoRequestErrorTypeEnum {
    MeanAbsolutePercentageError = "MeanAbsolutePercentageError"
,    MeanSquaredError = "MeanSquaredError"
,    MeanAbsoluteError = "MeanAbsoluteError"
,    MedianAbsoluteDeviation = "MedianAbsoluteDeviation"
,    None = "None"
}


export class PlanningLevelInfoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=discardData" })
  discardData?: boolean;

  @Metadata({ data: "json, name=errorType" })
  errorType?: PlanningLevelInfoRequestErrorTypeEnum;

  @Metadata({ data: "json, name=holdOutPeriod" })
  holdOutPeriod?: number;

  @Metadata({ data: "json, name=noFcst" })
  noFcst?: number;

  @Metadata({ data: "json, name=outlierDetection" })
  outlierDetection?: boolean;

  @Metadata({ data: "json, name=periodicity" })
  periodicity?: number;
}
