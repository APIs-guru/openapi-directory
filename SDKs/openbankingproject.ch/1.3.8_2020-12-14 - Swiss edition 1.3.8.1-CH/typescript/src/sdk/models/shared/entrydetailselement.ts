import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountReference16Ch } from "./accountreference16ch";
import { ReportExchangeRate } from "./reportexchangerate";
import { AccountReference16Ch } from "./accountreference16ch";
import { PurposeCodeEnum } from "./purposecodeenum";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { RemittanceInformationStructured } from "./remittanceinformationstructured";
import { Amount } from "./amount";


export class EntryDetailsElement extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=mandateId" })
  mandateId?: string;

  @Metadata({ data: "json, name=purposeCode" })
  purposeCode?: PurposeCodeEnum;

  @Metadata({ data: "json, name=remittanceInformationStructured" })
  remittanceInformationStructured?: RemittanceInformationStructured;

  @Metadata({ data: "json, name=remittanceInformationStructuredArray", elemType: shared.RemittanceInformationStructured })
  remittanceInformationStructuredArray?: RemittanceInformationStructured[];

  @Metadata({ data: "json, name=remittanceInformationUnstructured" })
  remittanceInformationUnstructured?: string;

  @Metadata({ data: "json, name=remittanceInformationUnstructuredArray" })
  remittanceInformationUnstructuredArray?: string[];

  @Metadata({ data: "json, name=transactionAmount" })
  transactionAmount: Amount;

  @Metadata({ data: "json, name=ultimateCreditor" })
  ultimateCreditor?: string;

  @Metadata({ data: "json, name=ultimateDebtor" })
  ultimateDebtor?: string;
}
