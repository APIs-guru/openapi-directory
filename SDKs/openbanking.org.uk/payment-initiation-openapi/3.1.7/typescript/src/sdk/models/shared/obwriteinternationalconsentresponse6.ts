import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";

export enum ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any"
,    Single = "Single"
}


// ObWriteInternationalConsentResponse6DataAuthorisation
/** 
 * The authorisation type request from the TPP.
**/
export class ObWriteInternationalConsentResponse6DataAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuthorisationType" })
  authorisationType: ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum;

  @Metadata({ data: "json, name=CompletionDateTime" })
  completionDateTime?: Date;
}


// ObWriteInternationalConsentResponse6DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalConsentResponse6DataCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}

export enum ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual"
,    Agreed = "Agreed"
,    Indicative = "Indicative"
}


// ObWriteInternationalConsentResponse6DataExchangeRateInformation
/** 
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export class ObWriteInternationalConsentResponse6DataExchangeRateInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @Metadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum;

  @Metadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditor extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalConsentResponse6DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternationalConsentResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalConsentResponse6DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual"
,    Agreed = "Agreed"
,    Indicative = "Indicative"
}


// ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @Metadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @Metadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;

  @Metadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalConsentResponse6DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalConsentResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal"
,    Urgent = "Urgent"
}


// ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternationalConsentResponse6DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export class ObWriteInternationalConsentResponse6DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalConsentResponse6DataInitiationCreditor;

  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalConsentResponse6DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalConsentResponse6DataInitiationCreditorAgent;

  @Metadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalConsentResponse6DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @Metadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @Metadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;

  @Metadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalConsentResponse6DataInitiationInstructedAmount;

  @Metadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @Metadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum;

  @Metadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @Metadata({ data: "json, name=Purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalConsentResponse6DataReadRefundAccountEnum {
    No = "No"
,    Yes = "Yes"
}

export enum ObWriteInternationalConsentResponse6DataStatusEnum {
    Authorised = "Authorised"
,    AwaitingAuthorisation = "AwaitingAuthorisation"
,    Consumed = "Consumed"
,    Rejected = "Rejected"
}


export class ObWriteInternationalConsentResponse6Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Authorisation" })
  authorisation?: ObWriteInternationalConsentResponse6DataAuthorisation;

  @Metadata({ data: "json, name=Charges", elemType: shared.ObWriteInternationalConsentResponse6DataCharges })
  charges?: ObWriteInternationalConsentResponse6DataCharges[];

  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=CutOffDateTime" })
  cutOffDateTime?: Date;

  @Metadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @Metadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalConsentResponse6DataExchangeRateInformation;

  @Metadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @Metadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalConsentResponse6DataInitiation;

  @Metadata({ data: "json, name=ReadRefundAccount" })
  readRefundAccount?: ObWriteInternationalConsentResponse6DataReadRefundAccountEnum;

  @Metadata({ data: "json, name=SCASupportData" })
  scaSupportData?: ObscaSupportData1;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteInternationalConsentResponse6DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalConsentResponse6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteInternationalConsentResponse6Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=Risk" })
  risk: ObRisk1;
}
