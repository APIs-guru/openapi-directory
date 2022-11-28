import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount1 } from "./obactiveorhistoriccurrencyandamount1";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";



export class ObScheduledPayment3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount51;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;

  @SpeakeasyMetadata({ data: "json, name=DebtorReference" })
  debtorReference?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObActiveOrHistoricCurrencyAndAmount1;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledPaymentDateTime" })
  scheduledPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ScheduledPaymentId" })
  scheduledPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledType" })
  scheduledType: ObExternalScheduleType1CodeEnum;
}
