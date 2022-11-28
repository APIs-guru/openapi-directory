import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=dayOfExecution" })
  dayOfExecution?: DayOfExecutionEnum;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=executionRule" })
  executionRule?: ExecutionRuleEnum;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: FrequencyCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate: Date;
}
