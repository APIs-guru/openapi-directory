package shared

type InvoiceSummaryAdditionalChargeSummary struct {
	TotalAmount *Amount `json:"totalAmount,omitempty"`
	Type        *string `json:"type,omitempty"`
}
