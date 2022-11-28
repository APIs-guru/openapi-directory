package shared

type AuditLogConfigLogTypeEnum string

const (
	AuditLogConfigLogTypeEnumLogTypeUnspecified AuditLogConfigLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	AuditLogConfigLogTypeEnumAdminRead          AuditLogConfigLogTypeEnum = "ADMIN_READ"
	AuditLogConfigLogTypeEnumDataWrite          AuditLogConfigLogTypeEnum = "DATA_WRITE"
	AuditLogConfigLogTypeEnumDataRead           AuditLogConfigLogTypeEnum = "DATA_READ"
)

// AuditLogConfig
// Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
type AuditLogConfig struct {
	ExemptedMembers       []string                   `json:"exemptedMembers,omitempty"`
	IgnoreChildExemptions *bool                      `json:"ignoreChildExemptions,omitempty"`
	LogType               *AuditLogConfigLogTypeEnum `json:"logType,omitempty"`
}
