import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";



// ObWriteInternationalStandingOrderResponse7DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteInternationalStandingOrderResponse7DataCharges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteInternationalStandingOrderResponse7DataInitiationCreditor
/** 
 * Party to which an amount of money is due.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiationCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount
/** 
 * Provides the details to identify the beneficiary account.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent
/** 
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount
/** 
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteInternationalStandingOrderResponse7DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export class ObWriteInternationalStandingOrderResponse7DataInitiation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChargeBearer" })
  chargeBearer?: ObChargeBearerType1CodeEnum;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalStandingOrderResponse7DataInitiationCreditor;

  @SpeakeasyMetadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount;

  @SpeakeasyMetadata({ data: "json, name=CreditorAgent" })
  creditorAgent?: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent;

  @SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" })
  currencyOfTransfer: string;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" })
  destinationCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" })
  extendedPurpose?: string;

  @SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Frequency" })
  frequency: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @SpeakeasyMetadata({ data: "json, name=Purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference?: string;

  @SpeakeasyMetadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}


// ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @SpeakeasyMetadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum;
}


// ObWriteInternationalStandingOrderResponse7DataRefundAccount
/** 
 * Provides the details to identify an account.
**/
export class ObWriteInternationalStandingOrderResponse7DataRefundAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteInternationalStandingOrderResponse7DataRefundAgent
/** 
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export class ObWriteInternationalStandingOrderResponse7DataRefundAgent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName?: string;
}


// ObWriteInternationalStandingOrderResponse7DataRefundCreditor
/** 
 * Set of elements used to identify a person or an organisation.
**/
export class ObWriteInternationalStandingOrderResponse7DataRefundCreditor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PostalAddress" })
  postalAddress?: ObPostalAddress6;
}


export class ObWriteInternationalStandingOrderResponse7DataRefund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Account" })
  account: ObWriteInternationalStandingOrderResponse7DataRefundAccount;

  @SpeakeasyMetadata({ data: "json, name=Agent" })
  agent?: ObWriteInternationalStandingOrderResponse7DataRefundAgent;

  @SpeakeasyMetadata({ data: "json, name=Creditor" })
  creditor?: ObWriteInternationalStandingOrderResponse7DataRefundCreditor;
}

export enum ObWriteInternationalStandingOrderResponse7DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}


export class ObWriteInternationalStandingOrderResponse7Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalStandingOrderResponse7DataCharges })
  charges?: ObWriteInternationalStandingOrderResponse7DataCharges[];

  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @SpeakeasyMetadata({ data: "json, name=Initiation" })
  initiation: ObWriteInternationalStandingOrderResponse7DataInitiation;

  @SpeakeasyMetadata({ data: "json, name=InternationalStandingOrderId" })
  internationalStandingOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation;

  @SpeakeasyMetadata({ data: "json, name=Refund" })
  refund?: ObWriteInternationalStandingOrderResponse7DataRefund;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObWriteInternationalStandingOrderResponse7DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteInternationalStandingOrderResponse7 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObWriteInternationalStandingOrderResponse7Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
