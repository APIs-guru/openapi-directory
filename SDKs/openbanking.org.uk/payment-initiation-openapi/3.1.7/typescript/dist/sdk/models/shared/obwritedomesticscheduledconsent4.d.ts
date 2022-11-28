import { SpeakeasyBase } from "../../../internal/utils";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteDomesticScheduledConsent4DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
export declare class ObWriteDomesticScheduledConsent4DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount;
    endToEndIdentification?: string;
    instructedAmount: ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;
    requestedExecutionDateTime: Date;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticScheduledConsent4DataPermissionEnum {
    Create = "Create"
}
export declare enum ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class ObWriteDomesticScheduledConsent4Data extends SpeakeasyBase {
    authorisation?: ObWriteDomesticScheduledConsent4DataAuthorisation;
    initiation: ObWriteDomesticScheduledConsent4DataInitiation;
    permission: ObWriteDomesticScheduledConsent4DataPermissionEnum;
    readRefundAccount?: ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteDomesticScheduledConsent4 extends SpeakeasyBase {
    data: ObWriteDomesticScheduledConsent4Data;
    risk: ObRisk1;
}
