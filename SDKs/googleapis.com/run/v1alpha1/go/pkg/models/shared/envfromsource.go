package shared



type EnvFromSource struct {
    ConfigMapRef *ConfigMapEnvSource `json:"configMapRef,omitempty"`
    Prefix *string `json:"prefix,omitempty"`
    SecretRef *SecretEnvSource `json:"secretRef,omitempty"`
    
}

