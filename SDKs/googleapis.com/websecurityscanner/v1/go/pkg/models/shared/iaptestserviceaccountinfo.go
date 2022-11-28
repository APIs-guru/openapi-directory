package shared

// IapTestServiceAccountInfo
// Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.
type IapTestServiceAccountInfo struct {
	TargetAudienceClientID *string `json:"targetAudienceClientId,omitempty"`
}
