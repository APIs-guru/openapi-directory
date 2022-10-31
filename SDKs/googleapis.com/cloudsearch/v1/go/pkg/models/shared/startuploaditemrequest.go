package shared



type StartUploadItemRequest struct {
    ConnectorName *string `json:"connectorName,omitempty"`
    DebugOptions *DebugOptions `json:"debugOptions,omitempty"`
    
}

