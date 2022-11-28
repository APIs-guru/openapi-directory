import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";



export class ObScheduledPayment3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;

  @SpeakeasyMetadata({ data: "json, name=DebtorReference" })
  debtorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledPaymentDateTime" })
  scheduledPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduledPaymentId" })
  scheduledPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledType" })
  scheduledType: ObExternalScheduleType1CodeEnum;
}
