import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";



// ObWriteInternationalResponse5DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalResponse5DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}

export enum ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalResponse5DataExchangeRateInformation
/** 
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export class ObWriteInternationalResponse5DataExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate: number;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalResponse5DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalResponse5DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalResponse5DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteInternationalResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalResponse5DataInitiationCreditorAgent
/** 
 * Financial institution servicing an account for the creditor.
**/
export class ObWriteInternationalResponse5DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalResponse5DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}


// ObWriteInternationalResponse5DataInitiationExchangeRateInformation
/** 
 * Provides details on the currency exchange rate and contract.
**/
export class ObWriteInternationalResponse5DataInitiationExchangeRateInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContractIdentification" })
  contractIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRate" })
  exchangeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=RateType" })
  rateType: ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=UnitCurrency" })
  unitCurrency: string;
}


// ObWriteInternationalResponse5DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}

export enum ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}


// ObWriteInternationalResponse5DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteInternationalResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteInternationalResponse5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export class ObWriteInternationalResponse5DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalResponse5DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalResponse5DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalResponse5DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalResponse5DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalResponse5DataInitiationExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalResponse5DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=InstructionPriority" })
  instructionPriority?: ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteInternationalResponse5DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}


// ObWriteInternationalResponse5DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteInternationalResponse5DataMultiAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum;
}


// ObWriteInternationalResponse5DataRefundAccount
/** 
 * Provides the details to identify an account.
**/
export class ObWriteInternationalResponse5DataRefundAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalResponse5DataRefundAgent
/** 
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export class ObWriteInternationalResponse5DataRefundAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalResponse5DataRefundCreditor
/** 
 * Set of elements used to identify a person or an organisation.
**/
export class ObWriteInternationalResponse5DataRefundCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


export class ObWriteInternationalResponse5DataRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: ObWriteInternationalResponse5DataRefundAccount;

  @SpeakeasyMetadata({ data: "json, name=Agent" })
  agent?: ObWriteInternationalResponse5DataRefundAgent;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalResponse5DataRefundCreditor;
}

export enum ObWriteInternationalResponse5DataStatusEnum {
    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted",
    AcceptedSettlementCompleted = "AcceptedSettlementCompleted",
    AcceptedSettlementInProcess = "AcceptedSettlementInProcess",
    AcceptedWithoutPosting = "AcceptedWithoutPosting",
    Pending = "Pending",
    Rejected = "Rejected"
}


export class ObWriteInternationalResponse5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalResponse5DataCharges })
  charges?: ObWriteInternationalResponse5DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" })
  exchangeRateInformation?: ObWriteInternationalResponse5DataExchangeRateInformation;

  @SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalResponse5DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=InternationalPaymentId" })
  internationalPaymentId: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteInternationalResponse5DataMultiAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Refund" })
  refund?: ObWriteInternationalResponse5DataRefund;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalResponse5DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalResponse5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternationalResponse5Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
