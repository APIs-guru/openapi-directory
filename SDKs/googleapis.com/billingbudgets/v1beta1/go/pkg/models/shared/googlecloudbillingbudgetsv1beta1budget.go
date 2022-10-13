package shared

type GoogleCloudBillingBudgetsV1beta1Budget struct {
	AllUpdatesRule *GoogleCloudBillingBudgetsV1beta1AllUpdatesRule `json:"allUpdatesRule"`
	Amount         *GoogleCloudBillingBudgetsV1beta1BudgetAmount   `json:"amount"`
	BudgetFilter   *GoogleCloudBillingBudgetsV1beta1Filter         `json:"budgetFilter"`
	DisplayName    *string                                         `json:"displayName"`
	Etag           *string                                         `json:"etag"`
	Name           *string                                         `json:"name"`
	ThresholdRules []GoogleCloudBillingBudgetsV1beta1ThresholdRule `json:"thresholdRules"`
}
