import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ForecastPerformanceDataRequest } from "./forecastperformancedatarequest";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";


export enum ForecastPerformanceRequestMethodEnum {
    AutoBestPick = "AutoBestPick",
    BoxJenkinsParameterized = "BoxJenkinsParameterized",
    BoxJenkins = "BoxJenkins",
    CrostonParameterized = "CrostonParameterized",
    Croston = "Croston",
    DoubleExponentialSmoothingParameterized = "DoubleExponentialSmoothingParameterized",
    DoubleExponentialSmoothing = "DoubleExponentialSmoothing",
    HoltWintersParameterized = "HoltWintersParameterized",
    HoltWinters = "HoltWinters",
    SingleExponentialSmoothingParameterized = "SingleExponentialSmoothingParameterized",
    SingleExponentialSmoothing = "SingleExponentialSmoothing",
    ICue1Parameterized = "iCUE1Parameterized",
    ICue1 = "iCUE1",
    ICuEgamma = "iCUEgamma",
    SimpleMovingAverage = "SimpleMovingAverage",
    External = "External",
    ICuEbeta = "iCUEbeta"
}


export class ForecastPerformanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costOfError" })
  costOfError?: number;

  @SpeakeasyMetadata({ data: "json, name=data", elemType: ForecastPerformanceDataRequest })
  data?: ForecastPerformanceDataRequest[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: ForecastPerformanceRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @SpeakeasyMetadata({ data: "json, name=rewindTimeFrame" })
  rewindTimeFrame: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: string;
}
