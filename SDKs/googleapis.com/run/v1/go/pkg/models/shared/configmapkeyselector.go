package shared



type ConfigMapKeySelector struct {
    Key *string `json:"key,omitempty"`
    LocalObjectReference *LocalObjectReference `json:"localObjectReference,omitempty"`
    Name *string `json:"name,omitempty"`
    Optional *bool `json:"optional,omitempty"`
    
}

