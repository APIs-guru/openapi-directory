import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteInternationalConsentResponse6DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteInternationalConsentResponse6DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
export declare enum ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
export declare class ObWriteInternationalConsentResponse6DataExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate: number;
    expirationDateTime?: Date;
    rateType: ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Financial institution servicing an account for the creditor.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: number;
    rateType: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export declare class ObWriteInternationalConsentResponse6DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalConsentResponse6DataInitiationCreditor;
    creditorAccount: ObWriteInternationalConsentResponse6DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalConsentResponse6DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalConsentResponse6DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    endToEndIdentification: string;
    exchangeRateInformation?: ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;
    extendedPurpose?: string;
    instructedAmount: ObWriteInternationalConsentResponse6DataInitiationInstructedAmount;
    instructionIdentification: string;
    instructionPriority?: ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum;
    localInstrument?: string;
    purpose?: string;
    remittanceInformation?: ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalConsentResponse6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum ObWriteInternationalConsentResponse6DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class ObWriteInternationalConsentResponse6Data extends SpeakeasyBase {
    authorisation?: ObWriteInternationalConsentResponse6DataAuthorisation;
    charges?: ObWriteInternationalConsentResponse6DataCharges[];
    consentId: string;
    creationDateTime: Date;
    cutOffDateTime?: Date;
    debtor?: ObCashAccountDebtor4;
    exchangeRateInformation?: ObWriteInternationalConsentResponse6DataExchangeRateInformation;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteInternationalConsentResponse6DataInitiation;
    readRefundAccount?: ObWriteInternationalConsentResponse6DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
    status: ObWriteInternationalConsentResponse6DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteInternationalConsentResponse6 extends SpeakeasyBase {
    data: ObWriteInternationalConsentResponse6Data;
    links?: Links;
    meta?: Meta;
    risk: ObRisk1;
}
