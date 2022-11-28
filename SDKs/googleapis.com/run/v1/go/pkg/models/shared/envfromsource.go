package shared

// EnvFromSource
// Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps
type EnvFromSource struct {
	ConfigMapRef *ConfigMapEnvSource `json:"configMapRef,omitempty"`
	Prefix       *string             `json:"prefix,omitempty"`
	SecretRef    *SecretEnvSource    `json:"secretRef,omitempty"`
}
