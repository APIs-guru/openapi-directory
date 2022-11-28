package shared

// MailerSettings
// Configuration for mailgun api client
type MailerSettings struct {
	APIKey        string            `json:"apiKey"`
	APIKeyPrivate *string           `json:"apiKeyPrivate,omitempty"`
	APIKeyPublic  *string           `json:"apiKeyPublic,omitempty"`
	Domain        string            `json:"domain"`
	Eu            *bool             `json:"eu,omitempty"`
	Header        map[string]string `json:"header,omitempty"`
	Type          *string           `json:"type,omitempty"`
	URL           *string           `json:"url,omitempty"`
}
