import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InvoiceSummaryAdditionalChargeSummary } from "./invoicesummaryadditionalchargesummary";
import { Amount } from "./amount";
import { Promotion } from "./promotion";



export class InvoiceSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalChargeSummaries", elemType: InvoiceSummaryAdditionalChargeSummary })
  additionalChargeSummaries?: InvoiceSummaryAdditionalChargeSummary[];

  @SpeakeasyMetadata({ data: "json, name=customerBalance" })
  customerBalance?: Amount;

  @SpeakeasyMetadata({ data: "json, name=googleBalance" })
  googleBalance?: Amount;

  @SpeakeasyMetadata({ data: "json, name=merchantBalance" })
  merchantBalance?: Amount;

  @SpeakeasyMetadata({ data: "json, name=productTotal" })
  productTotal?: Amount;

  @SpeakeasyMetadata({ data: "json, name=promotionSummaries", elemType: Promotion })
  promotionSummaries?: Promotion[];
}
