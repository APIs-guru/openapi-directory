package shared



type PushItemRequest struct {
    ConnectorName *string `json:"connectorName,omitempty"`
    DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
    Item *PushItem `json:"item,omitempty"`
    
}

