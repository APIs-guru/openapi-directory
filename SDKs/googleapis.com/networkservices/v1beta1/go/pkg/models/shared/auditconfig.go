package shared

type AuditConfig struct {
	AuditLogConfigs []AuditLogConfig `json:"auditLogConfigs,omitempty"`
	Service         *string          `json:"service,omitempty"`
}
