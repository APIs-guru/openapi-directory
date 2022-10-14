package shared

type GoogleCloudBillingBudgetsV1beta1Budget struct {
	AllUpdatesRule *GoogleCloudBillingBudgetsV1beta1AllUpdatesRule `json:"allUpdatesRule,omitempty"`
	Amount         *GoogleCloudBillingBudgetsV1beta1BudgetAmount   `json:"amount,omitempty"`
	BudgetFilter   *GoogleCloudBillingBudgetsV1beta1Filter         `json:"budgetFilter,omitempty"`
	DisplayName    *string                                         `json:"displayName,omitempty"`
	Etag           *string                                         `json:"etag,omitempty"`
	Name           *string                                         `json:"name,omitempty"`
	ThresholdRules []GoogleCloudBillingBudgetsV1beta1ThresholdRule `json:"thresholdRules,omitempty"`
}
