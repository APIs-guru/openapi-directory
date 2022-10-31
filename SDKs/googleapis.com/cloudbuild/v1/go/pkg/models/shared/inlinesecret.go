package shared



type InlineSecret struct {
    EnvMap map[string]string `json:"envMap,omitempty"`
    KmsKeyName *string `json:"kmsKeyName,omitempty"`
    
}

