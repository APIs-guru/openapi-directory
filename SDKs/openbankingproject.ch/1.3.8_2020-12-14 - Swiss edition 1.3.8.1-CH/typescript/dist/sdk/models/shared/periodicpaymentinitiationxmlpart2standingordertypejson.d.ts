import { SpeakeasyBase } from "../../../internal/utils";
import { DayOfExecutionEnum } from "./dayofexecutionenum";
import { ExecutionRuleEnum } from "./executionruleenum";
import { FrequencyCodeEnum } from "./frequencycodeenum";
/**
 * The body part 2 of a periodic payment initation request containes the execution related informations
 * of the periodic payment.
 *
**/
export declare class PeriodicPaymentInitiationXmlPart2StandingorderTypeJson extends SpeakeasyBase {
    dayOfExecution?: DayOfExecutionEnum;
    endDate?: Date;
    executionRule?: ExecutionRuleEnum;
    frequency: FrequencyCodeEnum;
    startDate: Date;
}
