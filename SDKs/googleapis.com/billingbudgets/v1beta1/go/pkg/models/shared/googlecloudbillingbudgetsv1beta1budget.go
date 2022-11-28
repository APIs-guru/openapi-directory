package shared

// GoogleCloudBillingBudgetsV1beta1BudgetInput
// A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
type GoogleCloudBillingBudgetsV1beta1BudgetInput struct {
	AllUpdatesRule *GoogleCloudBillingBudgetsV1beta1AllUpdatesRule `json:"allUpdatesRule,omitempty"`
	Amount         *GoogleCloudBillingBudgetsV1beta1BudgetAmount   `json:"amount,omitempty"`
	BudgetFilter   *GoogleCloudBillingBudgetsV1beta1Filter         `json:"budgetFilter,omitempty"`
	DisplayName    *string                                         `json:"displayName,omitempty"`
	Etag           *string                                         `json:"etag,omitempty"`
	ThresholdRules []GoogleCloudBillingBudgetsV1beta1ThresholdRule `json:"thresholdRules,omitempty"`
}

// GoogleCloudBillingBudgetsV1beta1Budget
// A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
type GoogleCloudBillingBudgetsV1beta1Budget struct {
	AllUpdatesRule *GoogleCloudBillingBudgetsV1beta1AllUpdatesRule `json:"allUpdatesRule,omitempty"`
	Amount         *GoogleCloudBillingBudgetsV1beta1BudgetAmount   `json:"amount,omitempty"`
	BudgetFilter   *GoogleCloudBillingBudgetsV1beta1Filter         `json:"budgetFilter,omitempty"`
	DisplayName    *string                                         `json:"displayName,omitempty"`
	Etag           *string                                         `json:"etag,omitempty"`
	Name           *string                                         `json:"name,omitempty"`
	ThresholdRules []GoogleCloudBillingBudgetsV1beta1ThresholdRule `json:"thresholdRules,omitempty"`
}
