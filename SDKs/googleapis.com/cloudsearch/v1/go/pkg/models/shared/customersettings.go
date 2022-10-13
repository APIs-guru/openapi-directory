package shared

type CustomerSettings struct {
	AuditLoggingSettings *AuditLoggingSettings `json:"auditLoggingSettings"`
	VpcSettings          *VpcSettings          `json:"vpcSettings"`
}
