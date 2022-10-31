package shared

type MailerSendgridExporterConfigTypeEnum string

const (
	MailerSendgridExporterConfigTypeEnumSendgrid MailerSendgridExporterConfigTypeEnum = "sendgrid"
)

type MailerSendgridExporterConfig struct {
	APIKeyPublic *string                              `json:"apiKeyPublic,omitempty"`
	To           []string                             `json:"to,omitempty"`
	Type         MailerSendgridExporterConfigTypeEnum `json:"type"`
}
