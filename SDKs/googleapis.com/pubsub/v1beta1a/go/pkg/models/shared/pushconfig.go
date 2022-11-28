package shared

// PushConfig
// Configuration for a push delivery endpoint.
type PushConfig struct {
	PushEndpoint *string `json:"pushEndpoint,omitempty"`
}
