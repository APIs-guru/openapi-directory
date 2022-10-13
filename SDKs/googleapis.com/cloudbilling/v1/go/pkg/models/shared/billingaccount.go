package shared

type BillingAccount struct {
	DisplayName          *string `json:"displayName"`
	MasterBillingAccount *string `json:"masterBillingAccount"`
	Name                 *string `json:"name"`
	Open                 *bool   `json:"open"`
}
