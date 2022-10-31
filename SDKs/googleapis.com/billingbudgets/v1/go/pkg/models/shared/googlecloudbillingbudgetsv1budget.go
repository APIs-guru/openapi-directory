package shared



type GoogleCloudBillingBudgetsV1Budget struct {
    Amount *GoogleCloudBillingBudgetsV1BudgetAmount `json:"amount,omitempty"`
    BudgetFilter *GoogleCloudBillingBudgetsV1Filter `json:"budgetFilter,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationsRule *GoogleCloudBillingBudgetsV1NotificationsRule `json:"notificationsRule,omitempty"`
    ThresholdRules []GoogleCloudBillingBudgetsV1ThresholdRule `json:"thresholdRules,omitempty"`
    
}

