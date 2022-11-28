package shared

type GoogleIamV1AuditLogConfigLogTypeEnum string

const (
	GoogleIamV1AuditLogConfigLogTypeEnumLogTypeUnspecified GoogleIamV1AuditLogConfigLogTypeEnum = "LOG_TYPE_UNSPECIFIED"
	GoogleIamV1AuditLogConfigLogTypeEnumAdminRead          GoogleIamV1AuditLogConfigLogTypeEnum = "ADMIN_READ"
	GoogleIamV1AuditLogConfigLogTypeEnumDataWrite          GoogleIamV1AuditLogConfigLogTypeEnum = "DATA_WRITE"
	GoogleIamV1AuditLogConfigLogTypeEnumDataRead           GoogleIamV1AuditLogConfigLogTypeEnum = "DATA_READ"
)

// GoogleIamV1AuditLogConfig
// Provides the configuration for logging a type of permissions.
// Example:
//
//	{
//	  "audit_log_configs": [
//	    {
//	      "log_type": "DATA_READ",
//	      "exempted_members": [
//	        "user:jose@example.com"
//	      ]
//	    },
//	    {
//	      "log_type": "DATA_WRITE",
//	    }
//	  ]
//	}
//
// This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
// jose@example.com from DATA_READ logging.
type GoogleIamV1AuditLogConfig struct {
	ExemptedMembers []string                              `json:"exemptedMembers,omitempty"`
	LogType         *GoogleIamV1AuditLogConfigLogTypeEnum `json:"logType,omitempty"`
}
