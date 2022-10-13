package shared

type MailerSettings struct {
	APIKey        string            `json:"apiKey"`
	APIKeyPrivate *string           `json:"apiKeyPrivate"`
	APIKeyPublic  *string           `json:"apiKeyPublic"`
	Domain        string            `json:"domain"`
	Eu            *bool             `json:"eu"`
	Header        map[string]string `json:"header"`
	Type          *string           `json:"type"`
	URL           *string           `json:"url"`
}
