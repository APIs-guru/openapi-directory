package shared

type GoogleCloudBillingBudgetsV1BudgetAmount struct {
	LastPeriodAmount map[string]interface{} `json:"lastPeriodAmount"`
	SpecifiedAmount  *GoogleTypeMoney       `json:"specifiedAmount"`
}
