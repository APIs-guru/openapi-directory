package shared

type GoogleCloudBillingBudgetsV1beta1ListBudgetsResponse struct {
	Budgets       []GoogleCloudBillingBudgetsV1beta1Budget `json:"budgets"`
	NextPageToken *string                                  `json:"nextPageToken"`
}
