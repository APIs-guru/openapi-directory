import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCreditLine1 } from "./obcreditline1";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
/**
 * Set of elements used to define the balance details.
**/
export declare class ObCashBalance1 extends SpeakeasyBase {
    accountId: string;
    amount: ObActiveOrHistoricCurrencyAndAmount;
    creditDebitIndicator: ObCreditDebitCodeEnum;
    creditLine?: ObCreditLine1[];
    dateTime: Date;
    type: ObBalanceType1CodeEnum;
}
