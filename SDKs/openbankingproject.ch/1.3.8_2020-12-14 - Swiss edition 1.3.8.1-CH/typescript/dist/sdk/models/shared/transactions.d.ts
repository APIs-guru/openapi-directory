import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { AdditionalInformationStructured } from "./additionalinformationstructured";
import { Balance } from "./balance";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { EntryDetailsElement } from "./entrydetailselement";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";
/**
 * Transaction details.
**/
export declare class Transactions extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalInformation?: string;
    additionalInformationStructured?: AdditionalInformationStructured;
    balanceAfterTransaction?: Balance;
    bankTransactionCode?: string;
    batchIndicator?: boolean;
    batchNumberOfTransactions?: number;
    bookingDate?: Date;
    checkId?: string;
    creditorAccount?: AccountReference16Ch;
    creditorAgent?: string;
    creditorId?: string;
    creditorName?: string;
    currencyExchange?: ReportExchangeRate[];
    debtorAccount?: AccountReference16Ch;
    debtorAgent?: string;
    debtorName?: string;
    endToEndId?: string;
    entryDetails?: EntryDetailsElement[];
    entryReference?: string;
    mandateId?: string;
    proprietaryBankTransactionCode?: string;
    purposeCode?: PurposeCodeEnum;
    remittanceInformationStructured?: string;
    remittanceInformationStructuredArray?: RemittanceInformationStructured[];
    remittanceInformationUnstructured?: string;
    remittanceInformationUnstructuredArray?: string[];
    transactionAmount: Amount;
    transactionId?: string;
    ultimateCreditor?: string;
    ultimateDebtor?: string;
    valueDate?: Date;
}
