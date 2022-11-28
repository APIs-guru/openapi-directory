import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";



// ObTransactionCashBalance
/** 
 * Set of elements used to define the balance as a numerical representation of the net increases and decreases in an account after a transaction entry is applied to the account.
**/
export class ObTransactionCashBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}
