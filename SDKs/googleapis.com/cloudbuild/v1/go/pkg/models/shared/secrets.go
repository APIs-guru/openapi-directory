package shared

type Secrets struct {
	Inline        []InlineSecret        `json:"inline"`
	SecretManager []SecretManagerSecret `json:"secretManager"`
}
