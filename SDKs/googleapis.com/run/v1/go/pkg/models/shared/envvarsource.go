package shared

// EnvVarSource
// EnvVarSource represents a source for the value of an EnvVar.
type EnvVarSource struct {
	ConfigMapKeyRef *ConfigMapKeySelector `json:"configMapKeyRef,omitempty"`
	SecretKeyRef    *SecretKeySelector    `json:"secretKeyRef,omitempty"`
}
