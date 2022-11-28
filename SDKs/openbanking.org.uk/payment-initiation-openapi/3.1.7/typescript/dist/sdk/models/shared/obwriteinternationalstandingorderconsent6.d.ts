import { SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Provides the details to identify the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Provides the details to identify the debtor account.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export declare class ObWriteInternationalStandingOrderConsent6DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalStandingOrderConsent6DataInitiationCreditor;
    creditorAccount: ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    extendedPurpose?: string;
    finalPaymentDateTime?: Date;
    firstPaymentDateTime: Date;
    frequency: string;
    instructedAmount: ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
    numberOfPayments?: string;
    purpose?: string;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalStandingOrderConsent6DataPermissionEnum {
    Create = "Create"
}
export declare enum ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class ObWriteInternationalStandingOrderConsent6Data extends SpeakeasyBase {
    authorisation?: ObWriteInternationalStandingOrderConsent6DataAuthorisation;
    initiation: ObWriteInternationalStandingOrderConsent6DataInitiation;
    permission: ObWriteInternationalStandingOrderConsent6DataPermissionEnum;
    readRefundAccount?: ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteInternationalStandingOrderConsent6 extends SpeakeasyBase {
    data: ObWriteInternationalStandingOrderConsent6Data;
    risk: ObRisk1;
}
