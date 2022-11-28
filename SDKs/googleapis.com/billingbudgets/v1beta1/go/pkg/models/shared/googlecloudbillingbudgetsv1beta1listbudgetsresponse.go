package shared

// GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse
// Response for ListBudgets
type GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse struct {
	Budgets       []GoogleCloudBillingBudgetsV1beta1Budget `json:"budgets,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
