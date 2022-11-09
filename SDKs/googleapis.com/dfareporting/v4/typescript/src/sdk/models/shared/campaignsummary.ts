import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignSummary
/** 
 * Represents a summarized campaign information associated with this invoice.
**/
export class CampaignSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingInvoiceCode" })
  billingInvoiceCode?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=preTaxAmountMicros" })
  preTaxAmountMicros?: string;

  @Metadata({ data: "json, name=taxAmountMicros" })
  taxAmountMicros?: string;

  @Metadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;
}
