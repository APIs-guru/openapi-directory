import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";

export enum PlanningLevelRequestMethodEnum {
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


export class PlanningLevelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.PlanningLevelDataDto })
  data?: PlanningLevelDataDto[];

  @Metadata({ data: "json, name=method" })
  method: PlanningLevelRequestMethodEnum;

  @Metadata({ data: "json, name=override" })
  override?: boolean;

  @Metadata({ data: "json, name=params" })
  params?: PlanningLevelInfoRequest;

  @Metadata({ data: "json, name=planningLevelId" })
  planningLevelId: string;

  @Metadata({ data: "json, name=startDate" })
  startDate: string;
}
