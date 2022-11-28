import { SpeakeasyBase } from "../../../internal/utils";
import { ForecastPerformanceDataRequest } from "./forecastperformancedatarequest";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";
export declare enum ForecastPerformanceRequestMethodEnum {
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
export declare class ForecastPerformanceRequest extends SpeakeasyBase {
    costOfError?: number;
    data?: ForecastPerformanceDataRequest[];
    method: ForecastPerformanceRequestMethodEnum;
    params?: PlanningLevelInfoRequest;
    planningLevelId: string;
    rewindTimeFrame: number;
    startDate: string;
}
