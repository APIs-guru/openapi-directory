package shared



type CreateInstanceRequest struct {
    Clusters map[string]Cluster `json:"clusters,omitempty"`
    Instance *Instance `json:"instance,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    Parent *string `json:"parent,omitempty"`
    
}

