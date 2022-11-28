import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";
import { Date } from "./date";
import { DateRange } from "./daterange";


export enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}


// Invoice
/** 
 * A single invoice.
**/
export class Invoice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=budgetInvoiceGroupingId" })
  budgetInvoiceGroupingId?: string;

  @SpeakeasyMetadata({ data: "json, name=budgetSummaries", elemType: BudgetSummary })
  budgetSummaries?: BudgetSummary[];

  @SpeakeasyMetadata({ data: "json, name=correctedInvoiceId" })
  correctedInvoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceType" })
  invoiceType?: InvoiceInvoiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=issueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nonBudgetMicros" })
  nonBudgetMicros?: string;

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

  @SpeakeasyMetadata({ data: "json, name=serviceDateRange" })
  serviceDateRange?: DateRange;

  @SpeakeasyMetadata({ data: "json, name=subtotalAmountMicros" })
  subtotalAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalAmountMicros" })
  totalAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=totalTaxAmountMicros" })
  totalTaxAmountMicros?: string;
}
