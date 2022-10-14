package shared

type CloudAuditOptionsLogNameEnum string

const (
	CloudAuditOptionsLogNameEnumUnspecifiedLogName CloudAuditOptionsLogNameEnum = "UNSPECIFIED_LOG_NAME"
	CloudAuditOptionsLogNameEnumAdminActivity      CloudAuditOptionsLogNameEnum = "ADMIN_ACTIVITY"
	CloudAuditOptionsLogNameEnumDataAccess         CloudAuditOptionsLogNameEnum = "DATA_ACCESS"
)

type CloudAuditOptions struct {
	AuthorizationLoggingOptions *AuthorizationLoggingOptions  `json:"authorizationLoggingOptions,omitempty"`
	LogName                     *CloudAuditOptionsLogNameEnum `json:"logName,omitempty"`
}
