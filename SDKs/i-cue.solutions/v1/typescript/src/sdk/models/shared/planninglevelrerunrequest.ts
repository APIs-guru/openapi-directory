import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";


export enum PlanningLevelReRunRequestMethodEnum {
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


export class PlanningLevelReRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method: PlanningLevelReRunRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: number;
}
