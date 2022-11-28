import { SpeakeasyBase } from "../../../internal/utils";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObRisk1 } from "./obrisk1";
/**
 * Party to which an amount of money is due.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiationCreditor extends SpeakeasyBase {
    name?: string;
    postalAddress?: ObPostalAddress6;
}
/**
 * Provides the details to identify the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiationCreditorAgent extends SpeakeasyBase {
    identification?: string;
    name?: string;
    postalAddress?: ObPostalAddress6;
    schemeName?: string;
}
/**
 * Provides the details to identify the debtor account.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
export declare class ObWriteInternationalStandingOrder4DataInitiation extends SpeakeasyBase {
    chargeBearer?: ObChargeBearerType1CodeEnum;
    creditor?: ObWriteInternationalStandingOrder4DataInitiationCreditor;
    creditorAccount: ObWriteInternationalStandingOrder4DataInitiationCreditorAccount;
    creditorAgent?: ObWriteInternationalStandingOrder4DataInitiationCreditorAgent;
    currencyOfTransfer: string;
    debtorAccount?: ObWriteInternationalStandingOrder4DataInitiationDebtorAccount;
    destinationCountryCode?: string;
    extendedPurpose?: string;
    finalPaymentDateTime?: Date;
    firstPaymentDateTime: Date;
    frequency: string;
    instructedAmount: ObWriteInternationalStandingOrder4DataInitiationInstructedAmount;
    numberOfPayments?: string;
    purpose?: string;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteInternationalStandingOrder4Data extends SpeakeasyBase {
    consentId: string;
    initiation: ObWriteInternationalStandingOrder4DataInitiation;
}
export declare class ObWriteInternationalStandingOrder4 extends SpeakeasyBase {
    data: ObWriteInternationalStandingOrder4Data;
    risk: ObRisk1;
}
