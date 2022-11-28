import { SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount4 } from "./obactiveorhistoriccurrencyandamount4";
import { ObActiveOrHistoricCurrencyAndAmount2 } from "./obactiveorhistoriccurrencyandamount2";
import { ObActiveOrHistoricCurrencyAndAmount11 } from "./obactiveorhistoriccurrencyandamount11";
import { ObActiveOrHistoricCurrencyAndAmount3 } from "./obactiveorhistoriccurrencyandamount3";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";
export declare class ObStandingOrder6 extends SpeakeasyBase {
    accountId: string;
    creditorAccount?: ObCashAccount51;
    creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;
    finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount4;
    finalPaymentDateTime?: Date;
    firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount2;
    firstPaymentDateTime?: Date;
    frequency: string;
    lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount11;
    lastPaymentDateTime?: Date;
    nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount3;
    nextPaymentDateTime?: Date;
    numberOfPayments?: string;
    reference?: string;
    standingOrderId?: string;
    standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;
    supplementaryData?: Map<string, any>;
}
