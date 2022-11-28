import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
import { PlanningLevelInfoRequest } from "./planninglevelinforequest";
export declare enum AiPlanningLevelRequestMethodEnum {
    IcueMlp = "icueMLP",
    IcueMlo = "icueMLO"
}
export declare class AiPlanningLevelRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto[];
    method: AiPlanningLevelRequestMethodEnum;
    params?: PlanningLevelInfoRequest;
    planningLevelId: string;
    startDate: string;
}
