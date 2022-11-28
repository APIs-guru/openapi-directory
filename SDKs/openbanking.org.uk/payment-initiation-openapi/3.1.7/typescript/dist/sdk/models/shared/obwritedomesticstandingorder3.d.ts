import { SpeakeasyBase } from "../../../internal/utils";
import { ObRisk1 } from "./obrisk1";
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export declare class ObWriteDomesticStandingOrder3DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Provides the details to identify the debtor account.
**/
export declare class ObWriteDomesticStandingOrder3DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * The amount of the final Standing Order
**/
export declare class ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the first Standing Order
**/
export declare class ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the recurring Standing Order
**/
export declare class ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export declare class ObWriteDomesticStandingOrder3DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticStandingOrder3DataInitiationCreditorAccount;
    debtorAccount?: ObWriteDomesticStandingOrder3DataInitiationDebtorAccount;
    finalPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
    finalPaymentDateTime?: Date;
    firstPaymentAmount: ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
    firstPaymentDateTime: Date;
    frequency: string;
    numberOfPayments?: string;
    recurringPaymentAmount?: ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;
    recurringPaymentDateTime?: Date;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteDomesticStandingOrder3Data extends SpeakeasyBase {
    consentId: string;
    initiation: ObWriteDomesticStandingOrder3DataInitiation;
}
export declare class ObWriteDomesticStandingOrder3 extends SpeakeasyBase {
    data: ObWriteDomesticStandingOrder3Data;
    risk: ObRisk1;
}
