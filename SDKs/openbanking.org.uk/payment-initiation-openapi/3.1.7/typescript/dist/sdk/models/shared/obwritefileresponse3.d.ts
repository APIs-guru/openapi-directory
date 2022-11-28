import { SpeakeasyBase } from "../../../internal/utils";
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
export declare class ObWriteFileResponse3DataCharges extends SpeakeasyBase {
    amount: ObActiveOrHistoricCurrencyAndAmount;
    chargeBearer: ObChargeBearerType1CodeEnum;
    type: string;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteFileResponse3DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteFileResponse3DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export declare class ObWriteFileResponse3DataInitiation extends SpeakeasyBase {
    controlSum?: number;
    debtorAccount?: ObWriteFileResponse3DataInitiationDebtorAccount;
    fileHash: string;
    fileReference?: string;
    fileType: string;
    localInstrument?: string;
    numberOfTransactions?: string;
    remittanceInformation?: ObWriteFileResponse3DataInitiationRemittanceInformation;
    requestedExecutionDateTime?: Date;
    supplementaryData?: Map<string, any>;
}
export declare enum ObWriteFileResponse3DataMultiAuthorisationStatusEnum {
    Authorised = "Authorised",
    AwaitingFurtherAuthorisation = "AwaitingFurtherAuthorisation",
    Rejected = "Rejected"
}
/**
 * The multiple authorisation flow response from the ASPSP.
**/
export declare class ObWriteFileResponse3DataMultiAuthorisation extends SpeakeasyBase {
    expirationDateTime?: Date;
    lastUpdateDateTime?: Date;
    numberReceived?: number;
    numberRequired?: number;
    status: ObWriteFileResponse3DataMultiAuthorisationStatusEnum;
}
export declare enum ObWriteFileResponse3DataStatusEnum {
    InitiationCompleted = "InitiationCompleted",
    InitiationFailed = "InitiationFailed",
    InitiationPending = "InitiationPending"
}
export declare class ObWriteFileResponse3Data extends SpeakeasyBase {
    charges?: ObWriteFileResponse3DataCharges[];
    consentId: string;
    creationDateTime: Date;
    debtor?: ObCashAccountDebtor4;
    filePaymentId: string;
    initiation: ObWriteFileResponse3DataInitiation;
    multiAuthorisation?: ObWriteFileResponse3DataMultiAuthorisation;
    status: ObWriteFileResponse3DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObWriteFileResponse3 extends SpeakeasyBase {
    data: ObWriteFileResponse3Data;
    links?: Links;
    meta?: Meta;
}
