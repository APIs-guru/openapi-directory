package shared



type WritablePowerOutlet struct {
    ConnectedPort *string `json:"connected_port,omitempty"`
    Device int64 `json:"device"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Tags []string `json:"tags,omitempty"`
    
}

