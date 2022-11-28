import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * The amount of the final Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the first Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The amount of the recurring Standing Order
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
export declare class ObWriteDomesticStandingOrderConsentResponse6DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount;
    debtorAccount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount;
    finalPaymentAmount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount;
    finalPaymentDateTime?: Date;
    firstPaymentAmount: ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount;
    firstPaymentDateTime: Date;
    frequency: string;
    numberOfPayments?: string;
    recurringPaymentAmount?: ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount;
    recurringPaymentDateTime?: Date;
    reference?: string;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum {
    Create = "Create"
}
export declare enum ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class ObWriteDomesticStandingOrderConsentResponse6Data extends SpeakeasyBase {
    authorisation?: ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation;
    charges?: ObWriteDomesticStandingOrderConsentResponse6DataCharges[];
    consentId: string;
    creationDateTime: Date;
    cutOffDateTime?: Date;
    debtor?: ObCashAccountDebtor4;
    initiation: ObWriteDomesticStandingOrderConsentResponse6DataInitiation;
    permission: ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum;
    readRefundAccount?: ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
    status: ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteDomesticStandingOrderConsentResponse6 extends SpeakeasyBase {
    data: ObWriteDomesticStandingOrderConsentResponse6Data;
    links?: Links;
    meta?: Meta;
    risk: ObRisk1;
}
