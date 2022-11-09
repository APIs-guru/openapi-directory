import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
import { Amount } from "./amount";
import { MonthsOfExecutionEnum } from "./monthsofexecutionenum";


// StandingOrderDetails
/** 
 * Details of underlying standing orders.
 * 
**/
export class StandingOrderDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @Metadata({ data: "json, name=limitAmount" })
  limitAmount?: Amount;

  @Metadata({ data: "json, name=monthsOfExecution" })
  monthsOfExecution?: MonthsOfExecutionEnum[];

  @Metadata({ data: "json, name=multiplicator" })
  multiplicator?: number;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;

  @Metadata({ data: "json, name=withinAMonthFlag" })
  withinAMonthFlag?: boolean;
}
