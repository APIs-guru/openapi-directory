package shared

type EnvFromSource struct {
	ConfigMapRef *ConfigMapEnvSource `json:"configMapRef"`
	Prefix       *string             `json:"prefix"`
	SecretRef    *SecretEnvSource    `json:"secretRef"`
}
