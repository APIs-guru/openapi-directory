import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";
export declare enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}
/**
 * Contains information about a single invoice
**/
export declare class Invoice extends SpeakeasyBase {
    campaignSummaries?: CampaignSummary[];
    correctedInvoiceId?: string;
    currencyCode?: string;
    dueDate?: string;
    id?: string;
    invoiceType?: InvoiceInvoiceTypeEnum;
    issueDate?: string;
    kind?: string;
    paymentsAccountId?: string;
    paymentsProfileId?: string;
    pdfUrl?: string;
    purchaseOrderNumber?: string;
    replacedInvoiceIds?: string[];
    serviceEndDate?: string;
    serviceStartDate?: string;
    subtotalAmountMicros?: string;
    totalAmountMicros?: string;
    totalTaxAmountMicros?: string;
}
