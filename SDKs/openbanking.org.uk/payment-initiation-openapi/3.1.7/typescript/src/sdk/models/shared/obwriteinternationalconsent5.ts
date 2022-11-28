import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteInternationalConsent5DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteInternationalConsent5DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteInternationalConsent5DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalConsent5DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalConsent5DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternationalConsent5DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalConsent5DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternationalConsent5DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalConsent5DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalConsent5DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalConsent5DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternationalConsent5DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalConsent5DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalConsent5DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}


// ObWriteInternationalConsent5DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternationalConsent5DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternationalConsent5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export class ObWriteInternationalConsent5DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalConsent5DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalConsent5DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalConsent5DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalConsent5DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalConsent5DataInitiationExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalConsent5DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternationalConsent5DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalConsent5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}


export class ObWriteInternationalConsent5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteInternationalConsent5DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalConsent5DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteInternationalConsent5DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;
}


export class ObWriteInternationalConsent5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternationalConsent5Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
