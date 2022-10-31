package shared



type Secret struct {
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    SecretEnv map[string]string `json:"secretEnv,omitempty"`
    
}

