import { SpeakeasyBase } from "../../../internal/utils";
import { ObscaSupportData1 } from "./obscasupportdata1";
export declare enum ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum {
    Any = "Any",
    Single = "Single"
}
/**
 * The authorisation type request from the TPP.
**/
export declare class ObWriteFileConsent3DataAuthorisation extends SpeakeasyBase {
    authorisationType: ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum;
    completionDateTime?: Date;
}
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteFileConsent3DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteFileConsent3DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export declare class ObWriteFileConsent3DataInitiation extends SpeakeasyBase {
    controlSum?: number;
    debtorAccount?: ObWriteFileConsent3DataInitiationDebtorAccount;
    fileHash: string;
    fileReference?: string;
    fileType: string;
    localInstrument?: string;
    numberOfTransactions?: string;
    remittanceInformation?: ObWriteFileConsent3DataInitiationRemittanceInformation;
    requestedExecutionDateTime?: Date;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteFileConsent3Data extends SpeakeasyBase {
    authorisation?: ObWriteFileConsent3DataAuthorisation;
    initiation: ObWriteFileConsent3DataInitiation;
    scaSupportData?: ObscaSupportData1;
}
export declare class ObWriteFileConsent3 extends SpeakeasyBase {
    data: ObWriteFileConsent3Data;
}
