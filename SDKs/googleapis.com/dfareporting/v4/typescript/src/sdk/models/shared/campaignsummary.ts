import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignSummary
/** 
 * Represents a summarized campaign information associated with this invoice.
**/
export class CampaignSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingInvoiceCode" })
  billingInvoiceCode?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=preTaxAmountMicros" })
  preTaxAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=taxAmountMicros" })
  taxAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;
}
