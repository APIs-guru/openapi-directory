package shared

// BillingConfig
// Describes the billing configuration for a new tenant project.
type BillingConfig struct {
	BillingAccount *string `json:"billingAccount,omitempty"`
}
