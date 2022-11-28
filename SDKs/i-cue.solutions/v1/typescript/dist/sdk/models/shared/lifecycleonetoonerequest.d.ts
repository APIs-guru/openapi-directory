import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
export declare class LifecycleOneToOneRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto;
    planningLevelId: string;
    ratio?: number;
}
