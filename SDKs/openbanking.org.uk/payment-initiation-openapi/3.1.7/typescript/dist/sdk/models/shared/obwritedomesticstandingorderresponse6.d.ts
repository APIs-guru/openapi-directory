import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * The amount of the final Standing Order
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the first Standing Order
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the recurring Standing Order
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount;
    debtorAccount?: ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount;
    finalPaymentAmount?: ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount;
    finalPaymentDateTime?: Date;
    firstPaymentAmount: ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount;
    firstPaymentDateTime: Date;
    frequency: string;
    numberOfPayments?: string;
    recurringPaymentAmount?: ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount;
    recurringPaymentDateTime?: Date;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
export declare class ObWriteDomesticStandingOrderResponse6DataRefund extends SpeakeasyBase {
    account: ObWriteDomesticStandingOrderResponse6DataRefundAccount;
}
export declare enum ObWriteDomesticStandingOrderResponse6DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}
export declare class ObWriteDomesticStandingOrderResponse6Data extends SpeakeasyBase {
    charges?: ObWriteDomesticStandingOrderResponse6DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    domesticStandingOrderId: string;
    initiation: ObWriteDomesticStandingOrderResponse6DataInitiation;
    multiAuthorisation?: ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation;
    refund?: ObWriteDomesticStandingOrderResponse6DataRefund;
    status: ObWriteDomesticStandingOrderResponse6DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteDomesticStandingOrderResponse6 extends SpeakeasyBase {
    data: ObWriteDomesticStandingOrderResponse6Data;
    links?: Links;
    meta?: Meta;
}
