package shared



type Mount struct {
    Disk *string `json:"disk,omitempty"`
    Path *string `json:"path,omitempty"`
    ReadOnly *bool `json:"readOnly,omitempty"`
    
}

