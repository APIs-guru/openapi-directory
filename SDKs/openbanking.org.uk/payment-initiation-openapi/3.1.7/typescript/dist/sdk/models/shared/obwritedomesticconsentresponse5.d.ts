import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export declare enum ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteDomesticConsentResponse5DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteDomesticConsentResponse5DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomesticConsentResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticConsentResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomesticConsentResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export declare class ObWriteDomesticConsentResponse5DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticConsentResponse5DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomesticConsentResponse5DataInitiationDebtorAccount;
    endToEndIdentification: string;
    instructedAmount: ObWriteDomesticConsentResponse5DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticConsentResponse5DataReadRefundAccountEnum {
    No = "No",
    Yes = "Yes"
}
export declare enum ObWriteDomesticConsentResponse5DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Consumed = "Consumed",
    Rejected = "Rejected"
}
export declare class ObWriteDomesticConsentResponse5Data extends SpeakeasyBase {
    authorisation?: ObWriteDomesticConsentResponse5DataAuthorisation;
    charges?: ObWriteDomesticConsentResponse5DataCharges[];
    consentId: string;
    creationDateTime: Date;
    cutOffDateTime?: Date;
    debtor?: ObCashAccountDebtor4;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteDomesticConsentResponse5DataInitiation;
    readRefundAccount?: ObWriteDomesticConsentResponse5DataReadRefundAccountEnum;
    scaSupportData?: ObscaSupportData1;
    status: ObWriteDomesticConsentResponse5DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteDomesticConsentResponse5 extends SpeakeasyBase {
    data: ObWriteDomesticConsentResponse5Data;
    links?: Links;
    meta?: Meta;
    risk: ObRisk1;
}
