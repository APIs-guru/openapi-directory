package shared




type MailerMailgunExporterConfigTypeEnum string

const (
    MailerMailgunExporterConfigTypeEnumMailgun MailerMailgunExporterConfigTypeEnum = "mailgun"
)


type MailerMailgunExporterConfig struct {
    APIKey *string `json:"apiKey,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Eu *bool `json:"eu,omitempty"`
    To []string `json:"to,omitempty"`
    Type MailerMailgunExporterConfigTypeEnum `json:"type"`
    
}

