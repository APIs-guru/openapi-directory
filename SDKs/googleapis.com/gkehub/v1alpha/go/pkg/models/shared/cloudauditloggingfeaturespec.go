package shared

// CloudAuditLoggingFeatureSpec
// **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
type CloudAuditLoggingFeatureSpec struct {
	AllowlistedServiceAccounts []string `json:"allowlistedServiceAccounts,omitempty"`
}
