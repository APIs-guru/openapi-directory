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
export declare class ObWriteDomesticScheduledResponse5DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export declare class ObWriteDomesticScheduledResponse5DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount;
    endToEndIdentification?: string;
    instructedAmount: ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation;
    requestedExecutionDateTime: Date;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteDomesticScheduledResponse5DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteDomesticScheduledResponse5DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
export declare class ObWriteDomesticScheduledResponse5DataRefund extends SpeakeasyBase {
    account: ObWriteDomesticScheduledResponse5DataRefundAccount;
}
export declare enum ObWriteDomesticScheduledResponse5DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}
export declare class ObWriteDomesticScheduledResponse5Data extends SpeakeasyBase {
    charges?: ObWriteDomesticScheduledResponse5DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    domesticScheduledPaymentId: string;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteDomesticScheduledResponse5DataInitiation;
    multiAuthorisation?: ObWriteDomesticScheduledResponse5DataMultiAuthorisation;
    refund?: ObWriteDomesticScheduledResponse5DataRefund;
    status: ObWriteDomesticScheduledResponse5DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteDomesticScheduledResponse5 extends SpeakeasyBase {
    data: ObWriteDomesticScheduledResponse5Data;
    links?: Links;
    meta?: Meta;
}
