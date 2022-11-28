package shared

// ConfigSource
// Represents a source file which is used to generate the service configuration defined by `google.api.Service`.
type ConfigSource struct {
	Files []ConfigFile `json:"files,omitempty"`
	ID    *string      `json:"id,omitempty"`
}
