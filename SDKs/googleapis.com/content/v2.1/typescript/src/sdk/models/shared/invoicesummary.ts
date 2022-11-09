import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";


export class InvoiceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalChargeSummaries", elemType: shared.InvoiceSummaryAdditionalChargeSummary })
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];

  @Metadata({ data: "json, name=productTotal" })
  productTotal?: Amount;
}
