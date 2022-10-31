package shared



type PowerOutlet struct {
    ConnectedPort *string `json:"connected_port,omitempty"`
    Device NestedDevice `json:"device"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Tags []string `json:"tags,omitempty"`
    
}

