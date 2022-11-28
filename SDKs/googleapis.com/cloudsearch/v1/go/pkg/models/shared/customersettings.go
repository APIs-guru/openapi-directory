package shared

// CustomerSettings
// Represents settings at a customer level.
type CustomerSettings struct {
	AuditLoggingSettings *AuditLoggingSettings `json:"auditLoggingSettings,omitempty"`
	VpcSettings          *VpcSettings          `json:"vpcSettings,omitempty"`
}
