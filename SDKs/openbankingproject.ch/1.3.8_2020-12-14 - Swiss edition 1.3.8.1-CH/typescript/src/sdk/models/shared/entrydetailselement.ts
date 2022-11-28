import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";



export class EntryDetailsElement extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=mandateId" })
  mandateId?: string;

  @SpeakeasyMetadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: RemittanceInformationStructured;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationStructuredArray", elemType: RemittanceInformationStructured })
  remittanceInformationStructuredArray?: RemittanceInformationStructured[];

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @SpeakeasyMetadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @SpeakeasyMetadata({ data: "json, name=transactionAmount" })
  transactionAmount: Amount;

  @SpeakeasyMetadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @SpeakeasyMetadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;
}
