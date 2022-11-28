import { SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteInternationalConsent5DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalConsent5DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteInternationalConsent5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Financial institution servicing an account for the creditor.
**/
export declare class ObWriteInternationalConsent5DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalConsent5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
**/
export declare class ObWriteInternationalConsent5DataInitiationExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: number;
    rateType: ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalConsent5DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteInternationalConsent5DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export declare class ObWriteInternationalConsent5DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalConsent5DataInitiationCreditor;
    creditorAccount: ObWriteInternationalConsent5DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalConsent5DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalConsent5DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    endToEndIdentification: string;
    exchangeRateInformation?: ObWriteInternationalConsent5DataInitiationExchangeRateInformation;
    extendedPurpose?: string;
    instructedAmount: ObWriteInternationalConsent5DataInitiationInstructedAmount;
    instructionIdentification: string;
    instructionPriority?: ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum;
    localInstrument?: string;
    purpose?: string;
    remittanceInformation?: ObWriteInternationalConsent5DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalConsent5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class ObWriteInternationalConsent5Data extends SpeakeasyBase {
    authorisation?: ObWriteInternationalConsent5DataAuthorisation;
    initiation: ObWriteInternationalConsent5DataInitiation;
    readRefundAccount?: ObWriteInternationalConsent5DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteInternationalConsent5 extends SpeakeasyBase {
    data: ObWriteInternationalConsent5Data;
    risk: ObRisk1;
}
