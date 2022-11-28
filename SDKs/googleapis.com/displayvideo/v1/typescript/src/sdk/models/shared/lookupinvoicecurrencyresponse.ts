import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LookupInvoiceCurrencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}
