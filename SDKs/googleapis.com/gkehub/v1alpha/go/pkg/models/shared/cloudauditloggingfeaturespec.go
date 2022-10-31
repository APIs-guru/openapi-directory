package shared

type CloudAuditLoggingFeatureSpec struct {
	AllowlistedServiceAccounts []string `json:"allowlistedServiceAccounts,omitempty"`
}
