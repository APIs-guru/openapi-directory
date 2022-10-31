package shared



type ConfigMapEnvSource struct {
    LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
    Name *string `json:"name,omitempty"`
    Optional *bool `json:"optional,omitempty"`
    
}

