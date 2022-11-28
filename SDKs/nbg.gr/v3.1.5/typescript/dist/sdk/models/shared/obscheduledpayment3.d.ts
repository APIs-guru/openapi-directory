import { SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";
export declare class ObScheduledPayment3 extends SpeakeasyBase {
    accountId: string;
    creditorAccount?: ObCashAccount5;
    debtorReference?: string;
    instructedAmount: ObActiveOrHistoricCurrencyAndAmount;
    reference?: string;
    scheduledPaymentDateTime: Date;
    scheduledPaymentId?: string;
    scheduledType: ObExternalScheduleType1CodeEnum;
}
