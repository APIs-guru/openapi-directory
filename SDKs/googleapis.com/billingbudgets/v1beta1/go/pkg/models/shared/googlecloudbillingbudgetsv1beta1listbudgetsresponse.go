package shared

type GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse struct {
	Budgets       []GoogleCloudBillingBudgetsV1beta1Budget `json:"budgets,omitempty"`
	NextPageToken *string                                  `json:"nextPageToken,omitempty"`
}
