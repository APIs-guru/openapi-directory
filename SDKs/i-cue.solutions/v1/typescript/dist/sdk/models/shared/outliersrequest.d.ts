import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
export declare class OutliersRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto[];
    planningLevelId: string;
    startDate: string;
}
