package shared

// GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput
// Request for UpdateBudget
type GoogleCloudBillingBudgetsV1beta1UpdateBudgetRequestInput struct {
	Budget     *GoogleCloudBillingBudgetsV1beta1BudgetInput `json:"budget,omitempty"`
	UpdateMask *string                                      `json:"updateMask,omitempty"`
}
