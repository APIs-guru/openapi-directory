import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";


// ObTransactionCashBalance
/** 
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
export class ObTransactionCashBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}
