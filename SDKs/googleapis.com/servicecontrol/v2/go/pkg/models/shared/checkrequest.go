package shared



type CheckRequest struct {
    Attributes *AttributeContext `json:"attributes,omitempty"`
    Flags *string `json:"flags,omitempty"`
    Resources []ResourceInfo `json:"resources,omitempty"`
    ServiceConfigID *string `json:"serviceConfigId,omitempty"`
    
}

