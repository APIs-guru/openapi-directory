package shared




type MailerGenericExporterConfigTypeEnum string

const (
    MailerGenericExporterConfigTypeEnumGeneric MailerGenericExporterConfigTypeEnum = "generic"
)


type MailerGenericExporterConfig struct {
    Headers map[string]string `json:"headers,omitempty"`
    To []string `json:"to,omitempty"`
    Type MailerGenericExporterConfigTypeEnum `json:"type"`
    URL *string `json:"url,omitempty"`
    
}

