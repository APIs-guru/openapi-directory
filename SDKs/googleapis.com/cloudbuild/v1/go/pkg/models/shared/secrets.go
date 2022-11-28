package shared

// Secrets
// Secrets and secret environment variables.
type Secrets struct {
	Inline        []InlineSecret        `json:"inline,omitempty"`
	SecretManager []SecretManagerSecret `json:"secretManager,omitempty"`
}
