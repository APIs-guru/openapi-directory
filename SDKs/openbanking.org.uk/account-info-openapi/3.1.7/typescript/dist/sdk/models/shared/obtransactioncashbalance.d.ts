import { SpeakeasyBase } from "../../../internal/utils";
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";
/**
 * Amount of money of the cash balance after a transaction entry is applied to the account..
**/
export declare class ObTransactionCashBalanceAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
export declare class ObTransactionCashBalance extends SpeakeasyBase {
    amount: ObTransactionCashBalanceAmount;
    creditDebitIndicator: ObCreditDebitCode2Enum;
    type: ObBalanceType1CodeEnum;
}
