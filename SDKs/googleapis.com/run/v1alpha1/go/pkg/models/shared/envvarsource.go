package shared



type EnvVarSource struct {
    ConfigMapKeyRef *ConfigMapKeySelector `json:"configMapKeyRef,omitempty"`
    SecretKeyRef *SecretKeySelector `json:"secretKeyRef,omitempty"`
    
}

