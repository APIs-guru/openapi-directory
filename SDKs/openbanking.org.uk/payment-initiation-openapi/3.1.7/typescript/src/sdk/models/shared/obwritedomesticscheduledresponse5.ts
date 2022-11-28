import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";



// ObWriteDomesticScheduledResponse5DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteDomesticScheduledResponse5DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount
/** 
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export class ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation
/** 
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export class ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=Unstructured" })
  unstructured?: string;
}


// ObWriteDomesticScheduledResponse5DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export class ObWriteDomesticScheduledResponse5DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" })
  creditorPostalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" })
  endToEndIdentification?: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=InstructionIdentification" })
  instructionIdentification: string;

  @SpeakeasyMetadata({ data: "json, name=LocalInstrument" })
  localInstrument?: string;

  @SpeakeasyMetadata({ data: "json, name=RemittanceInformation" })
  remittanceInformation?: ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation;

  @SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" })
  requestedExecutionDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}


// ObWriteDomesticScheduledResponse5DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteDomesticScheduledResponse5DataMultiAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum;
}


// ObWriteDomesticScheduledResponse5DataRefundAccount
/** 
 * Provides the details to identify an account.
**/
export class ObWriteDomesticScheduledResponse5DataRefundAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticScheduledResponse5DataRefund
/** 
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
export class ObWriteDomesticScheduledResponse5DataRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: ObWriteDomesticScheduledResponse5DataRefundAccount;
}

export enum ObWriteDomesticScheduledResponse5DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}


export class ObWriteDomesticScheduledResponse5Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticScheduledResponse5DataCharges })
  charges?: ObWriteDomesticScheduledResponse5DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=DomesticScheduledPaymentId" })
  domesticScheduledPaymentId: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" })
  expectedExecutionDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" })
  expectedSettlementDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticScheduledResponse5DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteDomesticScheduledResponse5DataMultiAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Refund" })
  refund?: ObWriteDomesticScheduledResponse5DataRefund;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteDomesticScheduledResponse5DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteDomesticScheduledResponse5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteDomesticScheduledResponse5Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
