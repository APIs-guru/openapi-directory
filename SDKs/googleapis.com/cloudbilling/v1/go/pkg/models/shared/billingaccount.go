package shared

type BillingAccount struct {
	DisplayName          *string `json:"displayName,omitempty"`
	MasterBillingAccount *string `json:"masterBillingAccount,omitempty"`
	Name                 *string `json:"name,omitempty"`
	Open                 *bool   `json:"open,omitempty"`
}
