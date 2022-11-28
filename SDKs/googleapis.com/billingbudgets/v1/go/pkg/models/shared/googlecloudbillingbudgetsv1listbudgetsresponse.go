package shared

// GoogleCloudBillingBudgetsV1ListBudgetsResponse
// Response for ListBudgets
type GoogleCloudBillingBudgetsV1ListBudgetsResponse struct {
	Budgets       []GoogleCloudBillingBudgetsV1Budget `json:"budgets,omitempty"`
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
}
