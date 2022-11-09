import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { AdditionalInformationStructured } from "./additionalinformationstructured";
import { Balance } from "./balance";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { AccountReference16Ch } from "./accountreference16ch";
import { EntryDetailsElement } from "./entrydetailselement";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";


// Transactions
/** 
 * Transaction details.
**/
export class Transactions extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links?: Map<string, HrefType>;

  @Metadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=additionalInformationStructured" })
  additionalInformationStructured?: AdditionalInformationStructured;

  @Metadata({ data: "json, name=balanceAfterTransaction" })
  balanceAfterTransaction?: Balance;

  @Metadata({ data: "json, name=bankTransactionCode" })
  bankTransactionCode?: string;

  @Metadata({ data: "json, name=batchIndicator" })
  batchIndicator?: boolean;

  @Metadata({ data: "json, name=batchNumberOfTransactions" })
  batchNumberOfTransactions?: number;

  @Metadata({ data: "json, name=bookingDate" })
  bookingDate?: Date;

  @Metadata({ data: "json, name=checkId" })
  checkId?: string;

  @Metadata({ data: "json, name=creditorAccount" })
  creditorAccount?: AccountReference16Ch;

  @Metadata({ data: "json, name=creditorAgent" })
  creditorAgent?: string;

  @Metadata({ data: "json, name=creditorId" })
  creditorId?: string;

  @Metadata({ data: "json, name=creditorName" })
  creditorName?: string;

  @Metadata({ data: "json, name=currencyExchange", elemType: shared.ReportExchangeRate })
  currencyExchange?: ReportExchangeRate[];

  @Metadata({ data: "json, name=debtorAccount" })
  debtorAccount?: AccountReference16Ch;

  @Metadata({ data: "json, name=debtorAgent" })
  debtorAgent?: string;

  @Metadata({ data: "json, name=debtorName" })
  debtorName?: string;

  @Metadata({ data: "json, name=endToEndId" })
  endToEndId?: string;

  @Metadata({ data: "json, name=entryDetails", elemType: shared.EntryDetailsElement })
  entryDetails?: EntryDetailsElement[];

  @Metadata({ data: "json, name=entryReference" })
  entryReference?: string;

  @Metadata({ data: "json, name=mandateId" })
  mandateId?: string;

  @Metadata({ data: "json, name=proprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: string;

  @Metadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @Metadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: string;

  @Metadata({ data: "json, name=remittanceInformationStructuredArray", elemType: shared.RemittanceInformationStructured })
  remittanceInformationStructuredArray?: RemittanceInformationStructured[];

  @Metadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @Metadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @Metadata({ data: "json, name=transactionAmount" })
  transactionAmount: Amount;

  @Metadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @Metadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @Metadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;

  @Metadata({ data: "json, name=valueDate" })
  valueDate?: Date;
}
