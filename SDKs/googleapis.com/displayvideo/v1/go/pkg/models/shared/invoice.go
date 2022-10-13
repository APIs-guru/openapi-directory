package shared

type InvoiceInvoiceTypeEnum string

const (
	InvoiceInvoiceTypeEnumInvoiceTypeUnspecified InvoiceInvoiceTypeEnum = "INVOICE_TYPE_UNSPECIFIED"
	InvoiceInvoiceTypeEnumInvoiceTypeCredit      InvoiceInvoiceTypeEnum = "INVOICE_TYPE_CREDIT"
	InvoiceInvoiceTypeEnumInvoiceTypeInvoice     InvoiceInvoiceTypeEnum = "INVOICE_TYPE_INVOICE"
)

type Invoice struct {
	BudgetInvoiceGroupingID *string                 `json:"budgetInvoiceGroupingId"`
	BudgetSummaries         []BudgetSummary         `json:"budgetSummaries"`
	CorrectedInvoiceID      *string                 `json:"correctedInvoiceId"`
	CurrencyCode            *string                 `json:"currencyCode"`
	DisplayName             *string                 `json:"displayName"`
	DueDate                 *Date                   `json:"dueDate"`
	InvoiceID               *string                 `json:"invoiceId"`
	InvoiceType             *InvoiceInvoiceTypeEnum `json:"invoiceType"`
	IssueDate               *Date                   `json:"issueDate"`
	Name                    *string                 `json:"name"`
	NonBudgetMicros         *string                 `json:"nonBudgetMicros"`
	PaymentsAccountID       *string                 `json:"paymentsAccountId"`
	PaymentsProfileID       *string                 `json:"paymentsProfileId"`
	PdfURL                  *string                 `json:"pdfUrl"`
	PurchaseOrderNumber     *string                 `json:"purchaseOrderNumber"`
	ReplacedInvoiceIds      []string                `json:"replacedInvoiceIds"`
	ServiceDateRange        *DateRange              `json:"serviceDateRange"`
	SubtotalAmountMicros    *string                 `json:"subtotalAmountMicros"`
	TotalAmountMicros       *string                 `json:"totalAmountMicros"`
	TotalTaxAmountMicros    *string                 `json:"totalTaxAmountMicros"`
}
