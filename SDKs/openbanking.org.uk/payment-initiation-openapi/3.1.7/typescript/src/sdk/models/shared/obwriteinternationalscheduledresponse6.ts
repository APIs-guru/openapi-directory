import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";



// ObWriteInternationalScheduledResponse6DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalScheduledResponse6DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}

export enum ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalScheduledResponse6DataExchangeRateInformation
/** 
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export class ObWriteInternationalScheduledResponse6DataExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalScheduledResponse6DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}


// ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternationalScheduledResponse6DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
export class ObWriteInternationalScheduledResponse6DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalScheduledResponse6DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}


// ObWriteInternationalScheduledResponse6DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteInternationalScheduledResponse6DataMultiAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum;
}


// ObWriteInternationalScheduledResponse6DataRefundAccount
/** 
 * Provides the details to identify an account.
**/
export class ObWriteInternationalScheduledResponse6DataRefundAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalScheduledResponse6DataRefundAgent
/** 
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export class ObWriteInternationalScheduledResponse6DataRefundAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalScheduledResponse6DataRefundCreditor
/** 
 * Set of elements used to identify a person or an organisation.
**/
export class ObWriteInternationalScheduledResponse6DataRefundCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


export class ObWriteInternationalScheduledResponse6DataRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: ObWriteInternationalScheduledResponse6DataRefundAccount;

  @SpeakeasyMetadata({ data: "json, name=Agent" })
  agent?: ObWriteInternationalScheduledResponse6DataRefundAgent;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalScheduledResponse6DataRefundCreditor;
}

export enum ObWriteInternationalScheduledResponse6DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}


export class ObWriteInternationalScheduledResponse6Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalScheduledResponse6DataCharges })
  charges?: ObWriteInternationalScheduledResponse6DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalScheduledResponse6DataExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalScheduledResponse6DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=InternationalScheduledPaymentId" })
  internationalScheduledPaymentId: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteInternationalScheduledResponse6DataMultiAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Refund" })
  refund?: ObWriteInternationalScheduledResponse6DataRefund;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalScheduledResponse6DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalScheduledResponse6 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternationalScheduledResponse6Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
