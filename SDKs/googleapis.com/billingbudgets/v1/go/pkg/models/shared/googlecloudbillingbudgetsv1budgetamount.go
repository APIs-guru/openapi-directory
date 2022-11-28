package shared

// GoogleCloudBillingBudgetsV1BudgetAmount
// The budgeted amount for each usage period.
type GoogleCloudBillingBudgetsV1BudgetAmount struct {
	LastPeriodAmount map[string]interface{} `json:"lastPeriodAmount,omitempty"`
	SpecifiedAmount  *GoogleTypeMoney       `json:"specifiedAmount,omitempty"`
}
