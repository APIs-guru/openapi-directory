package shared

type PushConfig struct {
	Attributes   map[string]string `json:"attributes"`
	OidcToken    *OidcToken        `json:"oidcToken"`
	PushEndpoint *string           `json:"pushEndpoint"`
}
