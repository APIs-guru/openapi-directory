package shared

type InvoiceSummaryAdditionalChargeSummary struct {
	TotalAmount *Amount `json:"totalAmount"`
	Type        *string `json:"type"`
}
