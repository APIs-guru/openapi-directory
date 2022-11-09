import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";


export class ObStandingOrder5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;

  @Metadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime?: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=LastPaymentAmount" })
  lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=LastPaymentDateTime" })
  lastPaymentDateTime?: Date;

  @Metadata({ data: "json, name=NextPaymentAmount" })
  nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=NextPaymentDateTime" })
  nextPaymentDateTime?: Date;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=StandingOrderId" })
  standingOrderId?: string;

  @Metadata({ data: "json, name=StandingOrderStatusCode" })
  standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;
}
