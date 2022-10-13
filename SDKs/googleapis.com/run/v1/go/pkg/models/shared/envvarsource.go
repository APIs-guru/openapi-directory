package shared

type EnvVarSource struct {
	ConfigMapKeyRef *ConfigMapKeySelector `json:"configMapKeyRef"`
	SecretKeyRef    *SecretKeySelector    `json:"secretKeyRef"`
}
