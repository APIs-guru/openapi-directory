package shared

// GoogleCloudRunV2EnvVarSource
// EnvVarSource represents a source for the value of an EnvVar.
type GoogleCloudRunV2EnvVarSource struct {
	SecretKeyRef *GoogleCloudRunV2SecretKeySelector `json:"secretKeyRef,omitempty"`
}
