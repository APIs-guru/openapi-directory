package shared

// BillingAccount
// A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
type BillingAccount struct {
	DisplayName          *string `json:"displayName,omitempty"`
	MasterBillingAccount *string `json:"masterBillingAccount,omitempty"`
	Name                 *string `json:"name,omitempty"`
	Open                 *bool   `json:"open,omitempty"`
}

// BillingAccountInput
// A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
type BillingAccountInput struct {
	DisplayName          *string `json:"displayName,omitempty"`
	MasterBillingAccount *string `json:"masterBillingAccount,omitempty"`
}
