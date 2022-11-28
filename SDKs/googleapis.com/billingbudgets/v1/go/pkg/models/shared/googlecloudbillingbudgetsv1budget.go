package shared

// GoogleCloudBillingBudgetsV1Budget
// A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
type GoogleCloudBillingBudgetsV1Budget struct {
	Amount            *GoogleCloudBillingBudgetsV1BudgetAmount      `json:"amount,omitempty"`
	BudgetFilter      *GoogleCloudBillingBudgetsV1Filter            `json:"budgetFilter,omitempty"`
	DisplayName       *string                                       `json:"displayName,omitempty"`
	Etag              *string                                       `json:"etag,omitempty"`
	Name              *string                                       `json:"name,omitempty"`
	NotificationsRule *GoogleCloudBillingBudgetsV1NotificationsRule `json:"notificationsRule,omitempty"`
	ThresholdRules    []GoogleCloudBillingBudgetsV1ThresholdRule    `json:"thresholdRules,omitempty"`
}

// GoogleCloudBillingBudgetsV1BudgetInput
// A budget is a plan that describes what you expect to spend on Cloud projects, plus the rules to execute as spend is tracked against that plan, (for example, send an alert when 90% of the target spend is met). The budget time period is configurable, with options such as month (default), quarter, year, or custom time period.
type GoogleCloudBillingBudgetsV1BudgetInput struct {
	Amount            *GoogleCloudBillingBudgetsV1BudgetAmount      `json:"amount,omitempty"`
	BudgetFilter      *GoogleCloudBillingBudgetsV1Filter            `json:"budgetFilter,omitempty"`
	DisplayName       *string                                       `json:"displayName,omitempty"`
	Etag              *string                                       `json:"etag,omitempty"`
	NotificationsRule *GoogleCloudBillingBudgetsV1NotificationsRule `json:"notificationsRule,omitempty"`
	ThresholdRules    []GoogleCloudBillingBudgetsV1ThresholdRule    `json:"thresholdRules,omitempty"`
}
