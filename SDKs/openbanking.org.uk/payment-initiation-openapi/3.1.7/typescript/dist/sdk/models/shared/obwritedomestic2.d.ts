import { SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomestic2DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomestic2DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomestic2DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomestic2DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export declare class ObWriteDomestic2DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomestic2DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomestic2DataInitiationDebtorAccount;
    endToEndIdentification: string;
    instructedAmount: ObWriteDomestic2DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomestic2DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteDomestic2Data extends SpeakeasyBase {
    consentId: string;
    initiation: ObWriteDomestic2DataInitiation;
}
export declare class ObWriteDomestic2 extends SpeakeasyBase {
    data: ObWriteDomestic2Data;
    risk: ObRisk1;
}
