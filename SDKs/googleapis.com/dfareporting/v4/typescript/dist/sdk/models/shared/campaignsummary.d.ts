import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a summarized campaign information associated with this invoice.
**/
export declare class CampaignSummary extends SpeakeasyBase {
    billingInvoiceCode?: string;
    campaignId?: string;
    preTaxAmountMicros?: string;
    taxAmountMicros?: string;
    totalAmountMicros?: string;
}
