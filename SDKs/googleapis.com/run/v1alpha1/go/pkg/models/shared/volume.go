package shared

type Volume struct {
	ConfigMap *ConfigMapVolumeSource `json:"configMap"`
	Name      *string                `json:"name"`
	Secret    *SecretVolumeSource    `json:"secret"`
}
