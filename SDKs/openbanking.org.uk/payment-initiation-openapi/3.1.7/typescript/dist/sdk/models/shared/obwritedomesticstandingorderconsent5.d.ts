import { SpeakeasyBase } from "../../../internal/utils";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteDomesticStandingOrderConsent5DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Provides the details to identify the debtor account.
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * The amount of the final Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the first Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the recurring Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export declare class ObWriteDomesticStandingOrderConsent5DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;
    debtorAccount?: ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;
    finalPaymentAmount?: ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;
    finalPaymentDateTime?: Date;
    firstPaymentAmount: ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;
    firstPaymentDateTime: Date;
    frequency: string;
    numberOfPayments?: string;
    recurringPaymentAmount?: ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;
    recurringPaymentDateTime?: Date;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticStandingOrderConsent5DataPermissionEnum {
    Create = "Create"
}
export declare enum ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare class ObWriteDomesticStandingOrderConsent5Data extends SpeakeasyBase {
    authorisation?: ObWriteDomesticStandingOrderConsent5DataAuthorisation;
    initiation: ObWriteDomesticStandingOrderConsent5DataInitiation;
    permission: ObWriteDomesticStandingOrderConsent5DataPermissionEnum;
    readRefundAccount?: ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteDomesticStandingOrderConsent5 extends SpeakeasyBase {
    data: ObWriteDomesticStandingOrderConsent5Data;
    risk: ObRisk1;
}
