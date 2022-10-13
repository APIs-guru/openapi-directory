package shared

type GoogleCloudBillingBudgetsV1Budget struct {
	Amount            *GoogleCloudBillingBudgetsV1BudgetAmount      `json:"amount"`
	BudgetFilter      *GoogleCloudBillingBudgetsV1Filter            `json:"budgetFilter"`
	DisplayName       *string                                       `json:"displayName"`
	Etag              *string                                       `json:"etag"`
	Name              *string                                       `json:"name"`
	NotificationsRule *GoogleCloudBillingBudgetsV1NotificationsRule `json:"notificationsRule"`
	ThresholdRules    []GoogleCloudBillingBudgetsV1ThresholdRule    `json:"thresholdRules"`
}
