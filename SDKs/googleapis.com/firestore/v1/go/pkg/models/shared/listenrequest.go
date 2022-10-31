package shared



type ListenRequest struct {
    AddTarget *Target `json:"addTarget,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    RemoveTarget *int32 `json:"removeTarget,omitempty"`
    
}

