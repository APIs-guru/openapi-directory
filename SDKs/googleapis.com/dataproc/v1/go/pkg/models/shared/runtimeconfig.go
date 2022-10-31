package shared

type RuntimeConfig struct {
	ContainerImage *string           `json:"containerImage,omitempty"`
	Properties     map[string]string `json:"properties,omitempty"`
	Version        *string           `json:"version,omitempty"`
}
