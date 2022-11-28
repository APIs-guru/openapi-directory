package shared

// SecretEnvSource
// Not supported by Cloud Run SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
type SecretEnvSource struct {
	LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Optional             *bool                 `json:"optional,omitempty"`
}
