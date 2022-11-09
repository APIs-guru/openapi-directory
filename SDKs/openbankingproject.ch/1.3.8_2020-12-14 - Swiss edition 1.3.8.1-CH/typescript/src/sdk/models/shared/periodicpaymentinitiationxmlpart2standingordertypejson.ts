import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";


// PeriodicPaymentInitiationXmlPart2StandingorderTypeJson
/** 
 * The body part 2 of a periodic payment initation request containes the execution related informations
 * of the periodic payment.
 * 
**/
export class PeriodicPaymentInitiationXmlPart2StandingorderTypeJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @Metadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate: Date;
}
