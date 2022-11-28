import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";


export enum PlanningLevelRequestMethodEnum {
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


export class PlanningLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method: PlanningLevelRequestMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=override" })
  override?: boolean;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @SpeakeasyMetadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: string;
}
