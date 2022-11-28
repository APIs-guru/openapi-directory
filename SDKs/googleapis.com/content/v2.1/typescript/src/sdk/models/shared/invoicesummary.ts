import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";



export class InvoiceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalChargeSummaries", elemType: InvoiceSummaryAdditionalChargeSummary })
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];

  @SpeakeasyMetadata({ data: "json, name=productTotal" })
  productTotal?: Amount;
}
