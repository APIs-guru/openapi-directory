package shared

type MailerConsoleExporterConfigTypeEnum string

const (
	MailerConsoleExporterConfigTypeEnumGeneric MailerConsoleExporterConfigTypeEnum = "generic"
)

type MailerConsoleExporterConfig struct {
	Type *MailerConsoleExporterConfigTypeEnum `json:"type"`
}
