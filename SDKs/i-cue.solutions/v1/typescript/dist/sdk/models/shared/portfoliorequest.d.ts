import { SpeakeasyBase } from "../../../internal/utils";
import { PlanningLevelDataDto } from "./planningleveldatadto";
export declare class PortfolioRequest extends SpeakeasyBase {
    data?: PlanningLevelDataDto[];
    planningLevelId: string;
    startDate: string;
}
