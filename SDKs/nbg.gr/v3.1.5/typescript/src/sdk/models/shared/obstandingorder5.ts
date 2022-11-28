import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";



export class ObStandingOrder5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=LastPaymentAmount" })
  lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=LastPaymentDateTime" })
  lastPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NextPaymentAmount" })
  nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=NextPaymentDateTime" })
  nextPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=StandingOrderId" })
  standingOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=StandingOrderStatusCode" })
  standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;
}
