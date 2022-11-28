package shared

// ConfigMapEnvSource
// Not supported by Cloud Run ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
type ConfigMapEnvSource struct {
	LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Optional             *bool                 `json:"optional,omitempty"`
}
