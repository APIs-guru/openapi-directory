import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Promotion } from "./promotion";


export class InvoiceSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalChargeSummaries", elemType: shared.InvoiceSummaryAdditionalChargeSummary })
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];

  @Metadata({ data: "json, name=customerBalance" })
  customerBalance?: Amount;

  @Metadata({ data: "json, name=googleBalance" })
  googleBalance?: Amount;

  @Metadata({ data: "json, name=merchantBalance" })
  merchantBalance?: Amount;

  @Metadata({ data: "json, name=productTotal" })
  productTotal?: Amount;

  @Metadata({ data: "json, name=promotionSummaries", elemType: shared.Promotion })
  promotionSummaries?: Promotion[];
}
