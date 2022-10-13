package shared

type MailerGenericExporterConfigTypeEnum string

const (
	MailerGenericExporterConfigTypeEnumGeneric MailerGenericExporterConfigTypeEnum = "generic"
)

type MailerGenericExporterConfig struct {
	Headers map[string]string                   `json:"headers"`
	To      []string                            `json:"to"`
	Type    MailerGenericExporterConfigTypeEnum `json:"type"`
	URL     *string                             `json:"url"`
}
