import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=limitAmount" })
  limitAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=monthsOfExecution" })
  monthsOfExecution?: MonthsOfExecutionEnum[];

  @SpeakeasyMetadata({ data: "json, name=multiplicator" })
  multiplicator?: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "json, name=withinAMonthFlag" })
  withinAMonthFlag?: boolean;
}
