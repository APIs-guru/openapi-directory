import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount1 } from "./obactiveorhistoriccurrencyandamount1";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";


export class ObScheduledPayment3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount51;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;

  @Metadata({ data: "json, name=DebtorReference" })
  debtorReference?: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObActiveOrHistoricCurrencyAndAmount1;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=ScheduledPaymentDateTime" })
  scheduledPaymentDateTime: Date;

  @Metadata({ data: "json, name=ScheduledPaymentId" })
  scheduledPaymentId?: string;

  @Metadata({ data: "json, name=ScheduledType" })
  scheduledType: ObExternalScheduleType1CodeEnum;
}
