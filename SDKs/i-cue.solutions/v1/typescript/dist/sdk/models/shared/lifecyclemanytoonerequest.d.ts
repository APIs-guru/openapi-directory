import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
export declare class LifecycleManyToOneRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto[];
    planningLevelId: string;
    ratios?: number[];
}
