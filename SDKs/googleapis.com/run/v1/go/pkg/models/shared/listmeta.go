package shared



type ListMeta struct {
    Continue *string `json:"continue,omitempty"`
    ResourceVersion *string `json:"resourceVersion,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    
}

