package shared

// RuntimeConfig
// Runtime configuration for a workload.
type RuntimeConfig struct {
	ContainerImage *string           `json:"containerImage,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
	Version        *string           `json:"version,omitempty"`
}
