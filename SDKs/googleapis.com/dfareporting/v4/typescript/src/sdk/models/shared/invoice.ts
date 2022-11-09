import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CampaignSummary } from "./campaignsummary";

export enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED"
,    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT"
,    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}


// Invoice
/** 
 * Contains information about a single invoice
**/
export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=campaign_summaries", elemType: shared.CampaignSummary })
  campaignSummaries?: CampaignSummary[];

  @Metadata({ data: "json, name=correctedInvoiceId" })
  correctedInvoiceId?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceInvoiceTypeEnum;

  @Metadata({ data: "json, name=issueDate" })
  issueDate?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=paymentsAccountId" })
  paymentsAccountId?: string;

  @Metadata({ data: "json, name=paymentsProfileId" })
  paymentsProfileId?: string;

  @Metadata({ data: "json, name=pdfUrl" })
  pdfUrl?: string;

  @Metadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @Metadata({ data: "json, name=replacedInvoiceIds" })
  replacedInvoiceIds?: string[];

  @Metadata({ data: "json, name=serviceEndDate" })
  serviceEndDate?: string;

  @Metadata({ data: "json, name=serviceStartDate" })
  serviceStartDate?: string;

  @Metadata({ data: "json, name=subtotalAmountMicros" })
  subtotalAmountMicros?: string;

  @Metadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;

  @Metadata({ data: "json, name=totalTaxAmountMicros" })
  totalTaxAmountMicros?: string;
}
