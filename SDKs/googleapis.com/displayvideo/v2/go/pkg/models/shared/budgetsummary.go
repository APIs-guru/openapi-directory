package shared

// BudgetSummary
// Summarized information of an individual campaign budget.
type BudgetSummary struct {
	ExternalBudgetID   *string        `json:"externalBudgetId,omitempty"`
	PreTaxAmountMicros *string        `json:"preTaxAmountMicros,omitempty"`
	PrismaCpeCode      *PrismaCpeCode `json:"prismaCpeCode,omitempty"`
	TaxAmountMicros    *string        `json:"taxAmountMicros,omitempty"`
	TotalAmountMicros  *string        `json:"totalAmountMicros,omitempty"`
}
