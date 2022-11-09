import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ForecastPerformanceDataRequest } from "./forecastperformancedatarequest";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";

export enum ForecastPerformanceRequestMethodEnum {
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


export class ForecastPerformanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=costOfError" })
  costOfError?: number;

  @Metadata({ data: "json, name=data", elemType: shared.ForecastPerformanceDataRequest })
  data?: ForecastPerformanceDataRequest[];

  @Metadata({ data: "json, name=method" })
  method: ForecastPerformanceRequestMethodEnum;

  @Metadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=rewindTimeFrame" })
  rewindTimeFrame: number;

  @Metadata({ data: "json, name=startDate" })
  startDate: string;
}
