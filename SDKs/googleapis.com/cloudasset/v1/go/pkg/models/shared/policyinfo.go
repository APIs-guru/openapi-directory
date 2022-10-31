package shared



type PolicyInfo struct {
    AttachedResource *string `json:"attachedResource,omitempty"`
    Policy *Policy `json:"policy,omitempty"`
    
}

