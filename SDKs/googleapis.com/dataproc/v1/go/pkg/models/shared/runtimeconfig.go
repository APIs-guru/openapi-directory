package shared

type RuntimeConfig struct {
	ContainerImage *string           `json:"containerImage"`
	Properties     map[string]string `json:"properties"`
	Version        *string           `json:"version"`
}
