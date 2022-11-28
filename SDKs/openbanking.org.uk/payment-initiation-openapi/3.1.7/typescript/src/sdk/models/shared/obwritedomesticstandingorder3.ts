import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObRisk1 } from "./obrisk1";



// ObWriteDomesticStandingOrder3DataInitiationCreditorAccount
/** 
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export class ObWriteDomesticStandingOrder3DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrder3DataInitiationDebtorAccount
/** 
 * Provides the details to identify the debtor account.
**/
export class ObWriteDomesticStandingOrder3DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
/** 
 * The amount of the final Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
/** 
 * The amount of the first Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
/** 
 * The amount of the recurring Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export class ObWriteDomesticStandingOrder3DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticStandingOrder3DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticStandingOrder3DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount: ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" })
  recurringPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;

  @SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" })
  recurringPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteDomesticStandingOrder3Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticStandingOrder3DataInitiation;
}


export class ObWriteDomesticStandingOrder3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticStandingOrder3Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
