package shared

type BudgetSummary struct {
	ExternalBudgetID   *string        `json:"externalBudgetId"`
	PreTaxAmountMicros *string        `json:"preTaxAmountMicros"`
	PrismaCpeCode      *PrismaCpeCode `json:"prismaCpeCode"`
	TaxAmountMicros    *string        `json:"taxAmountMicros"`
	TotalAmountMicros  *string        `json:"totalAmountMicros"`
}
