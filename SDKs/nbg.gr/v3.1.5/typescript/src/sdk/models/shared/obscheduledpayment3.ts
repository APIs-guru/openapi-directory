import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObCashAccount5 } from "./obcashaccount5";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";


export class ObScheduledPayment3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount5;

  @Metadata({ data: "json, name=DebtorReference" })
  debtorReference?: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=ScheduledPaymentDateTime" })
  scheduledPaymentDateTime: Date;

  @Metadata({ data: "json, name=ScheduledPaymentId" })
  scheduledPaymentId?: string;

  @Metadata({ data: "json, name=ScheduledType" })
  scheduledType: ObExternalScheduleType1CodeEnum;
}
