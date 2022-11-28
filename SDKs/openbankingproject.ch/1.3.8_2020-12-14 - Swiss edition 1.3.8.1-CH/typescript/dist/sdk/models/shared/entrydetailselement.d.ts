import { SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";
export declare class EntryDetailsElement extends SpeakeasyBase {
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
    mandateId?: string;
    purposeCode?: PurposeCodeEnum;
    remittanceInformationStructured?: RemittanceInformationStructured;
    remittanceInformationStructuredArray?: RemittanceInformationStructured[];
    remittanceInformationUnstructured?: string;
    remittanceInformationUnstructuredArray?: string[];
    transactionAmount: Amount;
    ultimateCreditor?: string;
    ultimateDebtor?: string;
}
