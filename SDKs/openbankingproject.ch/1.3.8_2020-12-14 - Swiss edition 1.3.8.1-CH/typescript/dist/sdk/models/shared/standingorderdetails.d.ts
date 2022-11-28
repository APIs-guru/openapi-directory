import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { Amount } from "./amount";
import { MonthsOfExecutionEnum } from "./monthsofexecutionenum";
/**
 * Details of underlying standing orders.
 *
**/
export declare class StandingOrderDetails extends SpeakeasyBase {
    dayOfExecution?: DayOfExecutionEnum;
    endDate?: Date;
    executionRule?: ExecutionRuleEnum;
    frequency: FrequencyCodeEnum;
    limitAmount?: Amount;
    monthsOfExecution?: MonthsOfExecutionEnum[];
    multiplicator?: number;
    startDate: Date;
    withinAMonthFlag?: boolean;
}
