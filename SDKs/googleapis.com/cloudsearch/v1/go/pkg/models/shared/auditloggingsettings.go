package shared

type AuditLoggingSettings struct {
	LogAdminReadActions *bool   `json:"logAdminReadActions"`
	LogDataReadActions  *bool   `json:"logDataReadActions"`
	LogDataWriteActions *bool   `json:"logDataWriteActions"`
	Project             *string `json:"project"`
}
