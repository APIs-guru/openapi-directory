package shared



type Endpoint struct {
    Address *string `json:"address,omitempty"`
    ConnectionType *string `json:"connectionType,omitempty"`
    Use *string `json:"use,omitempty"`
    
}

