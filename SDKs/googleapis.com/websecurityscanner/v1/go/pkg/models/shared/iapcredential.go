package shared

// IapCredential
// Describes authentication configuration for Identity-Aware-Proxy (IAP).
type IapCredential struct {
	IapTestServiceAccountInfo *IapTestServiceAccountInfo `json:"iapTestServiceAccountInfo,omitempty"`
}
