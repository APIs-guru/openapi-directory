import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Provides the details to identify the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalStandingOrderResponse7DataInitiationCreditor;
    creditorAccount: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    extendedPurpose?: string;
    finalPaymentDateTime?: Date;
    firstPaymentDateTime: Date;
    frequency: string;
    instructedAmount: ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount;
    numberOfPayments?: string;
    purpose?: string;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataRefundAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Set of elements used to identify a person or an organisation.
**/
export declare class ObWriteInternationalStandingOrderResponse7DataRefundCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
export declare class ObWriteInternationalStandingOrderResponse7DataRefund extends SpeakeasyBase {
    account: ObWriteInternationalStandingOrderResponse7DataRefundAccount;
    agent?: ObWriteInternationalStandingOrderResponse7DataRefundAgent;
    creditor?: ObWriteInternationalStandingOrderResponse7DataRefundCreditor;
}
export declare enum ObWriteInternationalStandingOrderResponse7DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}
export declare class ObWriteInternationalStandingOrderResponse7Data extends SpeakeasyBase {
    charges?: ObWriteInternationalStandingOrderResponse7DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    initiation: ObWriteInternationalStandingOrderResponse7DataInitiation;
    internationalStandingOrderId: string;
    multiAuthorisation?: ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation;
    refund?: ObWriteInternationalStandingOrderResponse7DataRefund;
    status: ObWriteInternationalStandingOrderResponse7DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteInternationalStandingOrderResponse7 extends SpeakeasyBase {
    data: ObWriteInternationalStandingOrderResponse7Data;
    links?: Links;
    meta?: Meta;
}
