import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObCreditDebitCode2Enum } from "./obcreditdebitcode2enum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";


// ObTransactionCashBalanceAmount
/** 
 * Amount of money of the cash balance after a transaction entry is applied to the account..
**/
export class ObTransactionCashBalanceAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObTransactionCashBalance
/** 
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
export class ObTransactionCashBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObTransactionCashBalanceAmount;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCode2Enum;

  @Metadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}
