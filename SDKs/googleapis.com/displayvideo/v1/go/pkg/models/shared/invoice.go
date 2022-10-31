package shared




type InvoiceInvoiceTypeEnum string

const (
    InvoiceInvoiceTypeEnumInvoiceTypeUnspecified InvoiceInvoiceTypeEnum = "INVOICE_TYPE_UNSPECIFIED"
InvoiceInvoiceTypeEnumInvoiceTypeCredit InvoiceInvoiceTypeEnum = "INVOICE_TYPE_CREDIT"
InvoiceInvoiceTypeEnumInvoiceTypeInvoice InvoiceInvoiceTypeEnum = "INVOICE_TYPE_INVOICE"
)


type Invoice struct {
    BudgetInvoiceGroupingID *string `json:"budgetInvoiceGroupingId,omitempty"`
    BudgetSummaries []BudgetSummary `json:"budgetSummaries,omitempty"`
    CorrectedInvoiceID *string `json:"correctedInvoiceId,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    DueDate *Date `json:"dueDate,omitempty"`
    InvoiceID *string `json:"invoiceId,omitempty"`
    InvoiceType *InvoiceInvoiceTypeEnum `json:"invoiceType,omitempty"`
    IssueDate *Date `json:"issueDate,omitempty"`
    Name *string `json:"name,omitempty"`
    NonBudgetMicros *string `json:"nonBudgetMicros,omitempty"`
    PaymentsAccountID *string `json:"paymentsAccountId,omitempty"`
    PaymentsProfileID *string `json:"paymentsProfileId,omitempty"`
    PdfURL *string `json:"pdfUrl,omitempty"`
    PurchaseOrderNumber *string `json:"purchaseOrderNumber,omitempty"`
    ReplacedInvoiceIds []string `json:"replacedInvoiceIds,omitempty"`
    ServiceDateRange *DateRange `json:"serviceDateRange,omitempty"`
    SubtotalAmountMicros *string `json:"subtotalAmountMicros,omitempty"`
    TotalAmountMicros *string `json:"totalAmountMicros,omitempty"`
    TotalTaxAmountMicros *string `json:"totalTaxAmountMicros,omitempty"`
    
}

