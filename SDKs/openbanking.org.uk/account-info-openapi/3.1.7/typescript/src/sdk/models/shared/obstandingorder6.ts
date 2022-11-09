import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount4 } from "./obactiveorhistoriccurrencyandamount4";
import { ObActiveOrHistoricCurrencyAndAmount2 } from "./obactiveorhistoriccurrencyandamount2";
import { ObActiveOrHistoricCurrencyAndAmount11 } from "./obactiveorhistoriccurrencyandamount11";
import { ObActiveOrHistoricCurrencyAndAmount3 } from "./obactiveorhistoriccurrencyandamount3";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";


export class ObStandingOrder6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount51;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;

  @Metadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount4;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount2;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime?: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=LastPaymentAmount" })
  lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount11;

  @Metadata({ data: "json, name=LastPaymentDateTime" })
  lastPaymentDateTime?: Date;

  @Metadata({ data: "json, name=NextPaymentAmount" })
  nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount3;

  @Metadata({ data: "json, name=NextPaymentDateTime" })
  nextPaymentDateTime?: Date;

  @Metadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=StandingOrderId" })
  standingOrderId?: string;

  @Metadata({ data: "json, name=StandingOrderStatusCode" })
  standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}
