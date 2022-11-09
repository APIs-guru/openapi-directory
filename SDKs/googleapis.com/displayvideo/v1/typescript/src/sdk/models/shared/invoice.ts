import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BudgetSummary } from "./budgetsummary";
import { Date } from "./date";
import { Date } from "./date";
import { DateRange } from "./daterange";

export enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED"
,    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT"
,    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}


// Invoice
/** 
 * A single invoice.
**/
export class Invoice extends SpeakeasyBase {
  @Metadata({ data: "json, name=budgetInvoiceGroupingId" })
  budgetInvoiceGroupingId?: string;

  @Metadata({ data: "json, name=budgetSummaries", elemType: shared.BudgetSummary })
  budgetSummaries?: BudgetSummary[];

  @Metadata({ data: "json, name=correctedInvoiceId" })
  correctedInvoiceId?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @Metadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @Metadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceInvoiceTypeEnum;

  @Metadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nonBudgetMicros" })
  nonBudgetMicros?: string;

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

  @Metadata({ data: "json, name=serviceDateRange" })
  serviceDateRange?: DateRange;

  @Metadata({ data: "json, name=subtotalAmountMicros" })
  subtotalAmountMicros?: string;

  @Metadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;

  @Metadata({ data: "json, name=totalTaxAmountMicros" })
  totalTaxAmountMicros?: string;
}
