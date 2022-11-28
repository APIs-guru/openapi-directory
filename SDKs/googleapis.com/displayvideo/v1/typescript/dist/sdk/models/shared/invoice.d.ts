import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetSummary } from "./budgetsummary";
import { Date } from "./date";
import { DateRange } from "./daterange";
export declare enum InvoiceInvoiceTypeEnum {
    InvoiceTypeUnspecified = "INVOICE_TYPE_UNSPECIFIED",
    InvoiceTypeCredit = "INVOICE_TYPE_CREDIT",
    InvoiceTypeInvoice = "INVOICE_TYPE_INVOICE"
}
/**
 * A single invoice.
**/
export declare class Invoice extends SpeakeasyBase {
    budgetInvoiceGroupingId?: string;
    budgetSummaries?: BudgetSummary[];
    correctedInvoiceId?: string;
    currencyCode?: string;
    displayName?: string;
    dueDate?: Date;
    invoiceId?: string;
    invoiceType?: InvoiceInvoiceTypeEnum;
    issueDate?: Date;
    name?: string;
    nonBudgetMicros?: string;
    paymentsAccountId?: string;
    paymentsProfileId?: string;
    pdfUrl?: string;
    purchaseOrderNumber?: string;
    replacedInvoiceIds?: string[];
    serviceDateRange?: DateRange;
    subtotalAmountMicros?: string;
    totalAmountMicros?: string;
    totalTaxAmountMicros?: string;
}
