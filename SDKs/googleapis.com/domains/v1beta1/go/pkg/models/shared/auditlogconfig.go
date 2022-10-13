package shared

type AuditLogConfigLogTypeEnum string

const (
	AuditLogConfigLogTypeEnumLogTypeUnspecified AuditLogConfigLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	AuditLogConfigLogTypeEnumAdminRead          AuditLogConfigLogTypeEnum = "ADMIN_READ"
	AuditLogConfigLogTypeEnumDataWrite          AuditLogConfigLogTypeEnum = "DATA_WRITE"
	AuditLogConfigLogTypeEnumDataRead           AuditLogConfigLogTypeEnum = "DATA_READ"
)

type AuditLogConfig struct {
	ExemptedMembers []string                   `json:"exemptedMembers"`
	LogType         *AuditLogConfigLogTypeEnum `json:"logType"`
}
