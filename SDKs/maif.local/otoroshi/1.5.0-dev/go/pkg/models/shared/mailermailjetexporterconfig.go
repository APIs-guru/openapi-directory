package shared




type MailerMailjetExporterConfigTypeEnum string

const (
    MailerMailjetExporterConfigTypeEnumMailjet MailerMailjetExporterConfigTypeEnum = "mailjet"
)


type MailerMailjetExporterConfig struct {
    APIKeyPrivate *string `json:"apiKeyPrivate,omitempty"`
    APIKeyPublic *string `json:"apiKeyPublic,omitempty"`
    To []string `json:"to,omitempty"`
    Type MailerMailjetExporterConfigTypeEnum `json:"type"`
    
}

