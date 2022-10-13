package shared

type MailerMailgunExporterConfigTypeEnum string

const (
	MailerMailgunExporterConfigTypeEnumMailgun MailerMailgunExporterConfigTypeEnum = "mailgun"
)

type MailerMailgunExporterConfig struct {
	APIKey *string                             `json:"apiKey"`
	Domain *string                             `json:"domain"`
	Eu     *bool                               `json:"eu"`
	To     []string                            `json:"to"`
	Type   MailerMailgunExporterConfigTypeEnum `json:"type"`
}
