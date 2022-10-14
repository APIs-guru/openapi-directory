package shared

type Volume struct {
	ConfigMap *ConfigMapVolumeSource `json:"configMap,omitempty"`
	Name      *string                `json:"name,omitempty"`
	Secret    *SecretVolumeSource    `json:"secret,omitempty"`
}
