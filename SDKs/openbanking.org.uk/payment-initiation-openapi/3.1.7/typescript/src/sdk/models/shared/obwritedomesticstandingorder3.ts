import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObRisk1 } from "./obrisk1";


// ObWriteDomesticStandingOrder3DataInitiationCreditorAccount
/** 
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export class ObWriteDomesticStandingOrder3DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrder3DataInitiationDebtorAccount
/** 
 * Provides the details to identify the debtor account.
**/
export class ObWriteDomesticStandingOrder3DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
/** 
 * The amount of the final Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
/** 
 * The amount of the first Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
/** 
 * The amount of the recurring Standing Order
**/
export class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrder3DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export class ObWriteDomesticStandingOrder3DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticStandingOrder3DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticStandingOrder3DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount: ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @Metadata({ data: "json, name=RecurringPaymentAmount" })
  recurringPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;

  @Metadata({ data: "json, name=RecurringPaymentDateTime" })
  recurringPaymentDateTime?: Date;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteDomesticStandingOrder3Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticStandingOrder3DataInitiation;
}


export class ObWriteDomesticStandingOrder3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteDomesticStandingOrder3Data;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
