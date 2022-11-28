import { SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount1 } from "./obactiveorhistoriccurrencyandamount1";
import { ObExternalScheduleType1CodeEnum } from "./obexternalscheduletype1codeenum";
export declare class ObScheduledPayment3 extends SpeakeasyBase {
    accountId: string;
    creditorAccount?: ObCashAccount51;
    creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;
    debtorReference?: string;
    instructedAmount: ObActiveOrHistoricCurrencyAndAmount1;
    reference?: string;
    scheduledPaymentDateTime: Date;
    scheduledPaymentId?: string;
    scheduledType: ObExternalScheduleType1CodeEnum;
}
