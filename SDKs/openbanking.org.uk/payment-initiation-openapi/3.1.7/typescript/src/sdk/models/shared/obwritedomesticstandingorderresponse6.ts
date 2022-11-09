import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { Links } from "./links";
import { Meta } from "./meta";


// ObWriteDomesticStandingOrderResponse6DataCharges
/** 
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export class ObWriteDomesticStandingOrderResponse6DataCharges extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: ObActiveOrHistoricCurrencyAndAmount;

  @Metadata({ data: "json, name=ChargeBearer" })
  chargeBearer: ObChargeBearerType1CodeEnum;

  @Metadata({ data: "json, name=Type" })
  type: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount
/** 
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount
/** 
 * The amount of the final Standing Order
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount
/** 
 * The amount of the first Standing Order
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount
/** 
 * The amount of the recurring Standing Order
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


// ObWriteDomesticStandingOrderResponse6DataInitiation
/** 
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export class ObWriteDomesticStandingOrderResponse6DataInitiation extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreditorAccount" })
  creditorAccount: ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount?: ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount;

  @Metadata({ data: "json, name=FinalPaymentAmount" })
  finalPaymentAmount?: ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount;

  @Metadata({ data: "json, name=FinalPaymentDateTime" })
  finalPaymentDateTime?: Date;

  @Metadata({ data: "json, name=FirstPaymentAmount" })
  firstPaymentAmount: ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount;

  @Metadata({ data: "json, name=FirstPaymentDateTime" })
  firstPaymentDateTime: Date;

  @Metadata({ data: "json, name=Frequency" })
  frequency: string;

  @Metadata({ data: "json, name=NumberOfPayments" })
  numberOfPayments?: string;

  @Metadata({ data: "json, name=RecurringPaymentAmount" })
  recurringPaymentAmount?: ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount;

  @Metadata({ data: "json, name=RecurringPaymentDateTime" })
  recurringPaymentDateTime?: Date;

  @Metadata({ data: "json, name=Reference" })
  reference?: string;

  @Metadata({ data: "json, name=SupplementaryData" })
  supplementaryData?: Map<string, any>;
}

export enum ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised"
,    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation"
,    Rejected = "Rejected"
}


// ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation
/** 
 * The multiple authorisation flow response from the ASPSP.
**/
export class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=LastUpdateDateTime" })
  lastUpdateDateTime?: Date;

  @Metadata({ data: "json, name=NumberReceived" })
  numberReceived?: number;

  @Metadata({ data: "json, name=NumberRequired" })
  numberRequired?: number;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum;
}


// ObWriteDomesticStandingOrderResponse6DataRefundAccount
/** 
 * Provides the details to identify an account.
**/
export class ObWriteDomesticStandingOrderResponse6DataRefundAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


// ObWriteDomesticStandingOrderResponse6DataRefund
/** 
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
export class ObWriteDomesticStandingOrderResponse6DataRefund extends SpeakeasyBase {
  @Metadata({ data: "json, name=Account" })
  account: ObWriteDomesticStandingOrderResponse6DataRefundAccount;
}

export enum ObWriteDomesticStandingOrderResponse6DataStatusEnum {
    Cancelled = "Cancelled"
,    InitiationCompleted = "InitiationCompleted"
,    InitiationFailed = "InitiationFailed"
,    InitiationPending = "InitiationPending"
}


export class ObWriteDomesticStandingOrderResponse6Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=Charges", elemType: shared.ObWriteDomesticStandingOrderResponse6DataCharges })
  charges?: ObWriteDomesticStandingOrderResponse6DataCharges[];

  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=Debtor" })
  debtor?: ObCashAccountDebtor4;

  @Metadata({ data: "json, name=DomesticStandingOrderId" })
  domesticStandingOrderId: string;

  @Metadata({ data: "json, name=Initiation" })
  initiation: ObWriteDomesticStandingOrderResponse6DataInitiation;

  @Metadata({ data: "json, name=MultiAuthorisation" })
  multiAuthorisation?: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation;

  @Metadata({ data: "json, name=Refund" })
  refund?: ObWriteDomesticStandingOrderResponse6DataRefund;

  @Metadata({ data: "json, name=Status" })
  status: ObWriteDomesticStandingOrderResponse6DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObWriteDomesticStandingOrderResponse6 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObWriteDomesticStandingOrderResponse6Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
