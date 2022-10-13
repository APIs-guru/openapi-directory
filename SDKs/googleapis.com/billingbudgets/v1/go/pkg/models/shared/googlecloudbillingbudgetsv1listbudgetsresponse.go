package shared

type GoogleCloudBillingBudgetsV1ListBudgetsResponse struct {
	Budgets       []GoogleCloudBillingBudgetsV1Budget `json:"budgets"`
	NextPageToken *string                             `json:"nextPageToken"`
}
