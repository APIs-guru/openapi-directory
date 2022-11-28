import { SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternational3DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteInternational3DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Financial institution servicing an account for the creditor.
**/
export declare class ObWriteInternational3DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternational3DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum {
    Actual = "Actual",
    Agreed = "Agreed",
    Indicative = "Indicative"
}
/**
 * Provides details on the currency exchange rate and contract.
**/
export declare class ObWriteInternational3DataInitiationExchangeRateInformation extends SpeakeasyBase {
    contractIdentification?: string;
    exchangeRate?: number;
    rateType: ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;
    unitCurrency: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternational3DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare enum ObWriteInternational3DataInitiationInstructionPriorityEnum {
    Normal = "Normal",
    Urgent = "Urgent"
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteInternational3DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
export declare class ObWriteInternational3DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternational3DataInitiationCreditor;
    creditorAccount: ObWriteInternational3DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternational3DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternational3DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    endToEndIdentification: string;
    exchangeRateInformation?: ObWriteInternational3DataInitiationExchangeRateInformation;
    extendedPurpose?: string;
    instructedAmount: ObWriteInternational3DataInitiationInstructedAmount;
    instructionIdentification: string;
    instructionPriority?: ObWriteInternational3DataInitiationInstructionPriorityEnum;
    localInstrument?: string;
    purpose?: string;
    remittanceInformation?: ObWriteInternational3DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteInternational3Data extends SpeakeasyBase {
    consentId: string;
    initiation: ObWriteInternational3DataInitiation;
}
export declare class ObWriteInternational3 extends SpeakeasyBase {
    data: ObWriteInternational3Data;
    risk: ObRisk1;
}
