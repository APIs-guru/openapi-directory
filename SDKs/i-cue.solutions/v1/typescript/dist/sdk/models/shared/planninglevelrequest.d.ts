import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";
export declare enum PlanningLevelRequestMethodEnum {
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
export declare class PlanningLevelRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto[];
    method: PlanningLevelRequestMethodEnum;
    override?: boolean;
    params?: PlanningLevelInfoRequest;
    planningLevelId: string;
    startDate: string;
}
