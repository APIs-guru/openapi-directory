import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LookupInvoiceCurrencyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}
