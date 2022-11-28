import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";


export enum ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}


// ObWriteInternationalConsentResponse6DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteInternationalConsentResponse6DataAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteInternationalConsentResponse6DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalConsentResponse6DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}

export enum ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalConsentResponse6DataExchangeRateInformation
/** 
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export class ObWriteInternationalConsentResponse6DataExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalConsentResponse6DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalConsentResponse6DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalConsentResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}


// ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternationalConsentResponse6DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export class ObWriteInternationalConsentResponse6DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalConsentResponse6DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalConsentResponse6DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalConsentResponse6DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalConsentResponse6DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalConsentResponse6DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalConsentResponse6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}

export enum ObWriteInternationalConsentResponse6DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}


export class ObWriteInternationalConsentResponse6Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteInternationalConsentResponse6DataAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalConsentResponse6DataCharges })
  charges?: ObWriteInternationalConsentResponse6DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalConsentResponse6DataExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalConsentResponse6DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteInternationalConsentResponse6DataReadRefundAccountEnum;

  @SpeakeasyMetadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalConsentResponse6DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalConsentResponse6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternationalConsentResponse6Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
