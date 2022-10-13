package shared

type MailerSendgridExporterConfigTypeEnum string

const (
	MailerSendgridExporterConfigTypeEnumSendgrid MailerSendgridExporterConfigTypeEnum = "sendgrid"
)

type MailerSendgridExporterConfig struct {
	APIKeyPublic *string                              `json:"apiKeyPublic"`
	To           []string                             `json:"to"`
	Type         MailerSendgridExporterConfigTypeEnum `json:"type"`
}
