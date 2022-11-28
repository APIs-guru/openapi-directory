import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteDomesticResponse5DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
export declare class ObWriteDomesticResponse5DataInitiationCreditorAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteDomesticResponse5DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
export declare class ObWriteDomesticResponse5DataInitiationInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteDomesticResponse5DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
export declare class ObWriteDomesticResponse5DataInitiation extends SpeakeasyBase {
    creditorAccount: ObWriteDomesticResponse5DataInitiationCreditorAccount;
    creditorPostalAddress?: ObPostalAddress6;
    debtorAccount?: ObWriteDomesticResponse5DataInitiationDebtorAccount;
    endToEndIdentification: string;
    instructedAmount: ObWriteDomesticResponse5DataInitiationInstructedAmount;
    instructionIdentification: string;
    localInstrument?: string;
    remittanceInformation?: ObWriteDomesticResponse5DataInitiationRemittanceInformation;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteDomesticResponse5DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum;
}
/**
 * Provides the details to identify an account.
**/
export declare class ObWriteDomesticResponse5DataRefundAccount extends SpeakeasyBase {
    identification: string;
    name: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
export declare class ObWriteDomesticResponse5DataRefund extends SpeakeasyBase {
    account: ObWriteDomesticResponse5DataRefundAccount;
}
export declare enum ObWriteDomesticResponse5DataStatusEnum {
    AcceptedCreditSettlementCompleted = "AcceptedCreditSettlementCompleted",
    AcceptedSettlementCompleted = "AcceptedSettlementCompleted",
    AcceptedSettlementInProcess = "AcceptedSettlementInProcess",
    AcceptedWithoutPosting = "AcceptedWithoutPosting",
    Pending = "Pending",
    Rejected = "Rejected"
}
export declare class ObWriteDomesticResponse5Data extends SpeakeasyBase {
    charges?: ObWriteDomesticResponse5DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    domesticPaymentId: string;
    expectedExecutionDateTime?: Date;
    expectedSettlementDateTime?: Date;
    initiation: ObWriteDomesticResponse5DataInitiation;
    multiAuthorisation?: ObWriteDomesticResponse5DataMultiAuthorisation;
    refund?: ObWriteDomesticResponse5DataRefund;
    status: ObWriteDomesticResponse5DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteDomesticResponse5 extends SpeakeasyBase {
    data: ObWriteDomesticResponse5Data;
    links?: Links;
    meta?: Meta;
}
