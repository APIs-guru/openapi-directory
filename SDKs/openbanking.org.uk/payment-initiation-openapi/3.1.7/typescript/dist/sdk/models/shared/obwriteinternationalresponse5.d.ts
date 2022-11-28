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
export declare class ObWriteInternationalResponse5DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
export declare enum ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export declare class ObWriteInternationalResponse5DataExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: number;
    expirationDateTime?: Date;
    rateType: ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalResponse5DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteInternationalResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Financial institution servicing an account for the creditor.
**/
export declare class ObWriteInternationalResponse5DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
**/
export declare class ObWriteInternationalResponse5DataInitiationExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: number;
    rateType: ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteInternationalResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export declare class ObWriteInternationalResponse5DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalResponse5DataInitiationCreditor;
    creditorAccount: ObWriteInternationalResponse5DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalResponse5DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalResponse5DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    endToEndIdentification: string;
    exchangeRateInformation?: ObWriteInternationalResponse5DataInitiationExchangeRateInformation;
    extendedPurpose?: string;
    instructedAmount: ObWriteInternationalResponse5DataInitiationInstructedAmount;
    instructionIdentification: string;
    instructionPriority?: ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum;
    localInstrument?: string;
    purpose?: string;
    remittanceInformation?: ObWriteInternationalResponse5DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteInternationalResponse5DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteInternationalResponse5DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
export declare class ObWriteInternationalResponse5DataRefundAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Set of elements used to identify a person or an organisation.
**/
export declare class ObWriteInternationalResponse5DataRefundCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
export declare class ObWriteInternationalResponse5DataRefund extends SpeakeasyBase {
    account: ObWriteInternationalResponse5DataRefundAccount;
    agent?: ObWriteInternationalResponse5DataRefundAgent;
    creditor?: ObWriteInternationalResponse5DataRefundCreditor;
}
export declare enum ObWriteInternationalResponse5DataStatusEnum {
    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted",
    AcceptedSettlementCompleted = "AcceptedSettlementCompleted",
    AcceptedSettlementInProcess = "AcceptedSettlementInProcess",
    AcceptedWithoutPosting = "AcceptedWithoutPosting",
    Pending = "Pending",
    Rejected = "Rejected"
}
export declare class ObWriteInternationalResponse5Data extends SpeakeasyBase {
    charges?: ObWriteInternationalResponse5DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    exchangeRateInformation?: ObWriteInternationalResponse5DataExchangeRateInformation;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteInternationalResponse5DataInitiation;
    internationalPaymentId: string;
    multiAuthorisation?: ObWriteInternationalResponse5DataMultiAuthorisation;
    refund?: ObWriteInternationalResponse5DataRefund;
    status: ObWriteInternationalResponse5DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteInternationalResponse5 extends SpeakeasyBase {
    data: ObWriteInternationalResponse5Data;
    links?: Links;
    meta?: Meta;
}
