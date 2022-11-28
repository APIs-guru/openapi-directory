import { SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";
export declare class ObStandingOrder5 extends SpeakeasyBase {
    accountId: string;
    creditorAccount?: ObCashAccount5;
    finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;
    finalPaymentDateTime?: Date;
    firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;
    firstPaymentDateTime?: Date;
    frequency: string;
    lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;
    lastPaymentDateTime?: Date;
    nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;
    nextPaymentDateTime?: Date;
    reference?: string;
    standingOrderId?: string;
    standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;
}
