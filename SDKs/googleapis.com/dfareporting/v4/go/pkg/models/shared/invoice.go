package shared

type InvoiceInvoiceTypeEnum string

const (
	InvoiceInvoiceTypeEnumInvoiceTypeUnspecified InvoiceInvoiceTypeEnum = "INVOICE_TYPE_UNSPECIFIED"
	InvoiceInvoiceTypeEnumInvoiceTypeCredit      InvoiceInvoiceTypeEnum = "INVOICE_TYPE_CREDIT"
	InvoiceInvoiceTypeEnumInvoiceTypeInvoice     InvoiceInvoiceTypeEnum = "INVOICE_TYPE_INVOICE"
)

// Invoice
// Contains information about a single invoice
type Invoice struct {
	CampaignSummaries    []CampaignSummary       `json:"campaign_summaries,omitempty"`
	CorrectedInvoiceID   *string                 `json:"correctedInvoiceId,omitempty"`
	CurrencyCode         *string                 `json:"currencyCode,omitempty"`
	DueDate              *string                 `json:"dueDate,omitempty"`
	ID                   *string                 `json:"id,omitempty"`
	InvoiceType          *InvoiceInvoiceTypeEnum `json:"invoiceType,omitempty"`
	IssueDate            *string                 `json:"issueDate,omitempty"`
	Kind                 *string                 `json:"kind,omitempty"`
	PaymentsAccountID    *string                 `json:"paymentsAccountId,omitempty"`
	PaymentsProfileID    *string                 `json:"paymentsProfileId,omitempty"`
	PdfURL               *string                 `json:"pdfUrl,omitempty"`
	PurchaseOrderNumber  *string                 `json:"purchaseOrderNumber,omitempty"`
	ReplacedInvoiceIds   []string                `json:"replacedInvoiceIds,omitempty"`
	ServiceEndDate       *string                 `json:"serviceEndDate,omitempty"`
	ServiceStartDate     *string                 `json:"serviceStartDate,omitempty"`
	SubtotalAmountMicros *string                 `json:"subtotalAmountMicros,omitempty"`
	TotalAmountMicros    *string                 `json:"totalAmountMicros,omitempty"`
	TotalTaxAmountMicros *string                 `json:"totalTaxAmountMicros,omitempty"`
}
