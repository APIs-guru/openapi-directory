import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
export declare class ObWriteFile2DataInitiationDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
export declare class ObWriteFile2DataInitiationRemittanceInformation extends SpeakeasyBase {
    reference?: string;
    unstructured?: string;
}
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
**/
export declare class ObWriteFile2DataInitiation extends SpeakeasyBase {
    controlSum?: number;
    debtorAccount?: ObWriteFile2DataInitiationDebtorAccount;
    fileHash: string;
    fileReference?: string;
    fileType: string;
    localInstrument?: string;
    numberOfTransactions?: string;
    remittanceInformation?: ObWriteFile2DataInitiationRemittanceInformation;
    requestedExecutionDateTime?: Date;
    supplementaryData?: Map<string, any>;
}
export declare class ObWriteFile2Data extends SpeakeasyBase {
    consentId: string;
    initiation: ObWriteFile2DataInitiation;
}
export declare class ObWriteFile2 extends SpeakeasyBase {
    data: ObWriteFile2Data;
}
