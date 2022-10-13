package shared

type AuditConfig struct {
	AuditLogConfigs []AuditLogConfig `json:"auditLogConfigs"`
	Service         *string          `json:"service"`
}
