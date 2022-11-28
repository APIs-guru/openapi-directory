import { SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteDomesticConsent4DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomesticConsent4DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticConsent4DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomesticConsent4DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomesticConsent4DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export declare class ObWriteDomesticConsent4DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticConsent4DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomesticConsent4DataInitiationDebtorAccount;
    endToEndIdentification: string;
    instructedAmount: ObWriteDomesticConsent4DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomesticConsent4DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticConsent4DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class ObWriteDomesticConsent4Data extends SpeakeasyBase {
    authorisation?: ObWriteDomesticConsent4DataAuthorisation;
    initiation: ObWriteDomesticConsent4DataInitiation;
    readRefundAccount?: ObWriteDomesticConsent4DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteDomesticConsent4 extends SpeakeasyBase {
    data: ObWriteDomesticConsent4Data;
    risk: ObRisk1;
}
