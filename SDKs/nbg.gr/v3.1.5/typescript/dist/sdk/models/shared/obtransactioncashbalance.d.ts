import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
/**
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
export declare class ObTransactionCashBalance extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    creditDebitIndicator: ObCreditDebitCodeEnum;
    type: ObBalanceType1CodeEnum;
}
