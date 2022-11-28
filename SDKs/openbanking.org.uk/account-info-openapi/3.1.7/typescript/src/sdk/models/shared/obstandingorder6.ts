import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObCashAccount51 } from "./obcashaccount51";
import { ObBranchAndFinancialInstitutionIdentification51 } from "./obbranchandfinancialinstitutionidentification51";
import { ObActiveOrHistoricCurrencyAndAmount4 } from "./obactiveorhistoriccurrencyandamount4";
import { ObActiveOrHistoricCurrencyAndAmount2 } from "./obactiveorhistoriccurrencyandamount2";
import { ObActiveOrHistoricCurrencyAndAmount11 } from "./obactiveorhistoriccurrencyandamount11";
import { ObActiveOrHistoricCurrencyAndAmount3 } from "./obactiveorhistoriccurrencyandamount3";
import { ObExternalStandingOrderStatus1CodeEnum } from "./obexternalstandingorderstatus1codeenum";



export class ObStandingOrder6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount?: ObCashAccount51;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObBranchAndFinancialInstitutionIdentification51;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount4;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount2;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=LastPaymentAmount" })
  lastPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount11;

  @SpeakeasyMetadata({ data: "json, name=LastPaymentDateTime" })
  lastPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NextPaymentAmount" })
  nextPaymentAmount?: ObActiveOrHistoricCurrencyAndAmount3;

  @SpeakeasyMetadata({ data: "json, name=NextPaymentDateTime" })
  nextPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=StandingOrderId" })
  standingOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=StandingOrderStatusCode" })
  standingOrderStatusCode?: ObExternalStandingOrderStatus1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}
