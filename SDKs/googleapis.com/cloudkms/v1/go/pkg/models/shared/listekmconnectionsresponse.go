package shared



type ListEkmConnectionsResponse struct {
    EkmConnections []EkmConnection `json:"ekmConnections,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

