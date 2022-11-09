import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";


// ObWriteInternationalStandingOrder4DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalStandingOrder4DataInitiationCreditor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalStandingOrder4DataInitiationCreditorAccount
/** 
 * Provides the details to identify the beneficiary account.
**/
export class ObWriteInternationalStandingOrder4DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrder4DataInitiationCreditorAgent
/** 
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export class ObWriteInternationalStandingOrder4DataInitiationCreditorAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalStandingOrder4DataInitiationDebtorAccount
/** 
 * Provides the details to identify the debtor account.
**/
export class ObWriteInternationalStandingOrder4DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrder4DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalStandingOrder4DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteInternationalStandingOrder4DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export class ObWriteInternationalStandingOrder4DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalStandingOrder4DataInitiationCreditor;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalStandingOrder4DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalStandingOrder4DataInitiationCreditorAgent;

  @Metadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalStandingOrder4DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @Metadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalStandingOrder4DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @Metadata({ data: "json, name=Purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}


export class ObWriteInternationalStandingOrder4Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalStandingOrder4DataInitiation;
}


export class ObWriteInternationalStandingOrder4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteInternationalStandingOrder4Data;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
