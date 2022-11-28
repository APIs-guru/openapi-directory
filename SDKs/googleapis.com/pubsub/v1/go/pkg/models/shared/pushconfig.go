package shared

// PushConfig
// Configuration for a push delivery endpoint.
type PushConfig struct {
	Attributes   map[string]string `json:"attributes,omitempty"`
	OidcToken    *OidcToken        `json:"oidcToken,omitempty"`
	PushEndpoint *string           `json:"pushEndpoint,omitempty"`
}
