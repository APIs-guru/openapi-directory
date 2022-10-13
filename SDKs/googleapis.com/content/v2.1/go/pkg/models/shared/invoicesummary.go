package shared

type InvoiceSummary struct {
	AdditionalChargeSummaries []InvoiceSummaryAdditionalChargeSummary `json:"additionalChargeSummaries"`
	ProductTotal              *Amount                                 `json:"productTotal"`
}
