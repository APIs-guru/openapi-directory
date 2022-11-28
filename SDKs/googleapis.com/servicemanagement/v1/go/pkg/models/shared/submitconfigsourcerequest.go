package shared

// SubmitConfigSourceRequest
// Request message for SubmitConfigSource method.
type SubmitConfigSourceRequest struct {
	ConfigSource *ConfigSource `json:"configSource,omitempty"`
	ValidateOnly *bool         `json:"validateOnly,omitempty"`
}
