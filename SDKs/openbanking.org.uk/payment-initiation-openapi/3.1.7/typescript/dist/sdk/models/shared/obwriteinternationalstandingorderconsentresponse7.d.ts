import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Provides the details to identify the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export declare class ObWriteInternationalStandingOrderConsentResponse7DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor;
    creditorAccount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    extendedPurpose?: string;
    finalPaymentDateTime?: Date;
    firstPaymentDateTime: Date;
    frequency: string;
    instructedAmount: ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount;
    numberOfPayments?: string;
    purpose?: string;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum {
    Create = "Create"
}
export declare enum ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class ObWriteInternationalStandingOrderConsentResponse7Data extends SpeakeasyBase {
    authorisation?: ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation;
    charges?: ObWriteInternationalStandingOrderConsentResponse7DataCharges[];
    consentId: string;
    creationDateTime: Date;
    cutOffDateTime?: Date;
    debtor?: ObCashAccountDebtor4;
    initiation: ObWriteInternationalStandingOrderConsentResponse7DataInitiation;
    permission: ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum;
    readRefundAccount?: ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
    status: ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteInternationalStandingOrderConsentResponse7 extends SpeakeasyBase {
    data: ObWriteInternationalStandingOrderConsentResponse7Data;
    links?: Links;
    meta?: Meta;
    risk: ObRisk1;
}
