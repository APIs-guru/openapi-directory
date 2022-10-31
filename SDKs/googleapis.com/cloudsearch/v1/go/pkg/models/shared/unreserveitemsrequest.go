package shared



type UnreserveItemsRequest struct {
    ConnectorName *string `json:"connectorName,omitempty"`
    DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
    Queue *string `json:"queue,omitempty"`
    
}

