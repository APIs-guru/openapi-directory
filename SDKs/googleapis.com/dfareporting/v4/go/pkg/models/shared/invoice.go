package shared

type InvoiceInvoiceTypeEnum string

const (
	InvoiceInvoiceTypeEnumInvoiceTypeUnspecified InvoiceInvoiceTypeEnum = "INVOICE_TYPE_UNSPECIFIED"
	InvoiceInvoiceTypeEnumInvoiceTypeCredit      InvoiceInvoiceTypeEnum = "INVOICE_TYPE_CREDIT"
	InvoiceInvoiceTypeEnumInvoiceTypeInvoice     InvoiceInvoiceTypeEnum = "INVOICE_TYPE_INVOICE"
)

type Invoice struct {
	CampaignSummaries    []CampaignSummary       `json:"campaign_summaries"`
	CorrectedInvoiceID   *string                 `json:"correctedInvoiceId"`
	CurrencyCode         *string                 `json:"currencyCode"`
	DueDate              *string                 `json:"dueDate"`
	ID                   *string                 `json:"id"`
	InvoiceType          *InvoiceInvoiceTypeEnum `json:"invoiceType"`
	IssueDate            *string                 `json:"issueDate"`
	Kind                 *string                 `json:"kind"`
	PaymentsAccountID    *string                 `json:"paymentsAccountId"`
	PaymentsProfileID    *string                 `json:"paymentsProfileId"`
	PdfURL               *string                 `json:"pdfUrl"`
	PurchaseOrderNumber  *string                 `json:"purchaseOrderNumber"`
	ReplacedInvoiceIds   []string                `json:"replacedInvoiceIds"`
	ServiceEndDate       *string                 `json:"serviceEndDate"`
	ServiceStartDate     *string                 `json:"serviceStartDate"`
	SubtotalAmountMicros *string                 `json:"subtotalAmountMicros"`
	TotalAmountMicros    *string                 `json:"totalAmountMicros"`
	TotalTaxAmountMicros *string                 `json:"totalTaxAmountMicros"`
}
