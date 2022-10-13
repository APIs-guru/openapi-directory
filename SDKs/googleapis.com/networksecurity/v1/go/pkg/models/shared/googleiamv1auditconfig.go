package shared

type GoogleIamV1AuditConfig struct {
	AuditLogConfigs []GoogleIamV1AuditLogConfig `json:"auditLogConfigs"`
	Service         *string                     `json:"service"`
}
