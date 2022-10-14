package shared

type AuditLoggingSettings struct {
	LogAdminReadActions *bool   `json:"logAdminReadActions,omitempty"`
	LogDataReadActions  *bool   `json:"logDataReadActions,omitempty"`
	LogDataWriteActions *bool   `json:"logDataWriteActions,omitempty"`
	Project             *string `json:"project,omitempty"`
}
