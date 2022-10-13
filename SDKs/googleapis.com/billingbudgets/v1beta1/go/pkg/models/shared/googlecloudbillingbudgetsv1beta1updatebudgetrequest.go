package shared

type GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequest struct {
	Budget     *GoogleCloudBillingBudgetsV1beta1Budget `json:"budget"`
	UpdateMask *string                                 `json:"updateMask"`
}
