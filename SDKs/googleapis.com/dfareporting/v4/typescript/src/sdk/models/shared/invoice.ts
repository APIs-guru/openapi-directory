import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignSummary } from "./campaignsummary";


export enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}


// Invoice
/** 
 * Contains information about a single invoice
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaign_summaries", elemType: CampaignSummary })
  campaignSummaries?: CampaignSummary[];

  @SpeakeasyMetadata({ data: "json, name=correctedInvoiceId" })
  correctedInvoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceInvoiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentsAccountId" })
  paymentsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentsProfileId" })
  paymentsProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=pdfUrl" })
  pdfUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderNumber" })
  purchaseOrderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=replacedInvoiceIds" })
  replacedInvoiceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=serviceEndDate" })
  serviceEndDate?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceStartDate" })
  serviceStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=subtotalAmountMicros" })
  subtotalAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmountMicros" })
  totalTaxAmountMicros?: string;
}
