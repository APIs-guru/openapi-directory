package shared



type CreateInstanceRequest struct {
    Instance *Instance `json:"instance,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    
}

