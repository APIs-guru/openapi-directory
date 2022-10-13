package shared

type MailerMailjetExporterConfigTypeEnum string

const (
	MailerMailjetExporterConfigTypeEnumMailjet MailerMailjetExporterConfigTypeEnum = "mailjet"
)

type MailerMailjetExporterConfig struct {
	APIKeyPrivate *string                             `json:"apiKeyPrivate"`
	APIKeyPublic  *string                             `json:"apiKeyPublic"`
	To            []string                            `json:"to"`
	Type          MailerMailjetExporterConfigTypeEnum `json:"type"`
}
