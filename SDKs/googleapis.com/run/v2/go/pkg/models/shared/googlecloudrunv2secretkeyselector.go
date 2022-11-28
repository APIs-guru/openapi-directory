package shared

// GoogleCloudRunV2SecretKeySelector
// SecretEnvVarSource represents a source for the value of an EnvVar.
type GoogleCloudRunV2SecretKeySelector struct {
	Secret  *string `json:"secret,omitempty"`
	Version *string `json:"version,omitempty"`
}
