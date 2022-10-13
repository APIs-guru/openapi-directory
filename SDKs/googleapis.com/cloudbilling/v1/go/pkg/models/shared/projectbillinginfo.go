package shared

type ProjectBillingInfo struct {
	BillingAccountName *string `json:"billingAccountName"`
	BillingEnabled     *bool   `json:"billingEnabled"`
	Name               *string `json:"name"`
	ProjectID          *string `json:"projectId"`
}
