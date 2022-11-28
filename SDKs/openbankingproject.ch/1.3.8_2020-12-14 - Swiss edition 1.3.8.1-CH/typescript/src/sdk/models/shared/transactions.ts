import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { AdditionalInformationStructured } from "./additionalinformationstructured";
import { Balance } from "./balance";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { EntryDetailsElement } from "./entrydetailselement";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";



// Transactions
/** 
 * Transaction details.
**/
export class Transactions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=additionalInformationStructured" })
  additionalInformationStructured?: AdditionalInformationStructured;

  @SpeakeasyMetadata({ data: "json, name=balanceAfterTransaction" })
  balanceAfterTransaction?: Balance;

  @SpeakeasyMetadata({ data: "json, name=bankTransactionCode" })
  bankTransactionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=batchIndicator" })
  batchIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=batchNumberOfTransactions" })
  batchNumberOfTransactions?: number;

  @SpeakeasyMetadata({ data: "json, name=bookingDate" })
  bookingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=checkId" })
  checkId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditorAccount" })
  creditorAccount?: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=creditorAgent" })
  creditorAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=creditorId" })
  creditorId?: string;

  @SpeakeasyMetadata({ data: "json, name=creditorName" })
  creditorName?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyExchange", elemType: ReportExchangeRate })
  currencyExchange?: ReportExchangeRate[];

  @SpeakeasyMetadata({ data: "json, name=debtorAccount" })
  debtorAccount?: AccountReference16Ch;

  @SpeakeasyMetadata({ data: "json, name=debtorAgent" })
  debtorAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=debtorName" })
  debtorName?: string;

  @SpeakeasyMetadata({ data: "json, name=endToEndId" })
  endToEndId?: string;

  @SpeakeasyMetadata({ data: "json, name=entryDetails", elemType: EntryDetailsElement })
  entryDetails?: EntryDetailsElement[];

  @SpeakeasyMetadata({ data: "json, name=entryReference" })
  entryReference?: string;

  @SpeakeasyMetadata({ data: "json, name=mandateId" })
  mandateId?: string;

  @SpeakeasyMetadata({ data: "json, name=proprietaryBankTransactionCode" })
  proprietaryBankTransactionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: string;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationStructuredArray", elemType: RemittanceInformationStructured })
  remittanceInformationStructuredArray?: RemittanceInformationStructured[];

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactionAmount" })
  transactionAmount: Amount;

  @SpeakeasyMetadata({ data: "json, name=transactionId" })
  transactionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @SpeakeasyMetadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;

  @SpeakeasyMetadata({ data: "json, name=valueDate" })
  valueDate?: Date;
}
