import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCreditLine1 } from "./obcreditline1";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";



// ObCashBalance1
/** 
 * Set of elements used to define the balance details.
**/
export class ObCashBalance1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreditLine", elemType: ObCreditLine1 })
  creditLine?: ObCreditLine1[];

  @SpeakeasyMetadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}
