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
export declare class ObWriteInternationalScheduledResponse6DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
export declare enum ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export declare class ObWriteInternationalScheduledResponse6DataExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: number;
    expirationDateTime?: Date;
    rateType: ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Financial institution servicing an account for the creditor.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: number;
    rateType: ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
export declare class ObWriteInternationalScheduledResponse6DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalScheduledResponse6DataInitiationCreditor;
    creditorAccount: ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    endToEndIdentification?: string;
    exchangeRateInformation?: ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation;
    extendedPurpose?: string;
    instructedAmount: ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount;
    instructionIdentification: string;
    instructionPriority?: ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum;
    localInstrument?: string;
    purpose?: string;
    remittanceInformation?: ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation;
    requestedExecutionDateTime: Date;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteInternationalScheduledResponse6DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteInternationalScheduledResponse6DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export declare class ObWriteInternationalScheduledResponse6DataRefundAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Set of elements used to identify a person or an organisation.
**/
export declare class ObWriteInternationalScheduledResponse6DataRefundCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
export declare class ObWriteInternationalScheduledResponse6DataRefund extends SpeakeasyBase {
    account: ObWriteInternationalScheduledResponse6DataRefundAccount;
    agent?: ObWriteInternationalScheduledResponse6DataRefundAgent;
    creditor?: ObWriteInternationalScheduledResponse6DataRefundCreditor;
}
export declare enum ObWriteInternationalScheduledResponse6DataStatusEnum {
    Cancelled = "Cancelled",
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}
export declare class ObWriteInternationalScheduledResponse6Data extends SpeakeasyBase {
    charges?: ObWriteInternationalScheduledResponse6DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    exchangeRateInformation?: ObWriteInternationalScheduledResponse6DataExchangeRateInformation;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteInternationalScheduledResponse6DataInitiation;
    internationalScheduledPaymentId: string;
    multiAuthorisation?: ObWriteInternationalScheduledResponse6DataMultiAuthorisation;
    refund?: ObWriteInternationalScheduledResponse6DataRefund;
    status: ObWriteInternationalScheduledResponse6DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteInternationalScheduledResponse6 extends SpeakeasyBase {
    data: ObWriteInternationalScheduledResponse6Data;
    links?: Links;
    meta?: Meta;
}
