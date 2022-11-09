import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";

export enum PlanningLevelReRunRequestMethodEnum {
    AutoBestPick = "AutoBestPick"
,    BoxJenkinsParameterized = "BoxJenkinsParameterized"
,    BoxJenkins = "BoxJenkins"
,    CrostonParameterized = "CrostonParameterized"
,    Croston = "Croston"
,    DoubleExponentialSmoothingParameterized = "DoubleExponentialSmoothingParameterized"
,    DoubleExponentialSmoothing = "DoubleExponentialSmoothing"
,    HoltWintersParameterized = "HoltWintersParameterized"
,    HoltWinters = "HoltWinters"
,    SingleExponentialSmoothingParameterized = "SingleExponentialSmoothingParameterized"
,    SingleExponentialSmoothing = "SingleExponentialSmoothing"
,    ICue1Parameterized = "iCUE1Parameterized"
,    ICue1 = "iCUE1"
,    ICuEgamma = "iCUEgamma"
,    SimpleMovingAverage = "SimpleMovingAverage"
,    External = "External"
,    ICuEbeta = "iCUEbeta"
}


export class PlanningLevelReRunRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method: PlanningLevelReRunRequestMethodEnum;

  @Metadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: number;
}
