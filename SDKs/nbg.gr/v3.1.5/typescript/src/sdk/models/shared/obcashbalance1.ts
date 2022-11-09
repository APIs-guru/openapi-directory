import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObCreditDebitCodeEnum } from "./obcreditdebitcodeenum";
import { ObCreditLine1 } from "./obcreditline1";
import { ObBalanceType1CodeEnum } from "./obbalancetype1codeenum";


// ObCashBalance1
/** 
 * Set of elements used to define the balance details.
**/
export class ObCashBalance1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=CreditDebitIndicator" })
  creditDebitIndicator: ObCreditDebitCodeEnum;

  @Metadata({ data: "json, name=CreditLine", elemType: shared.ObCreditLine1 })
  creditLine?: ObCreditLine1[];

  @Metadata({ data: "json, name=DateTime" })
  dateTime: Date;

  @Metadata({ data: "json, name=Type" })
  type: ObBalanceType1CodeEnum;
}
