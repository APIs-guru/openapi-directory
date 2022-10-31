package shared



type RewriteResponse struct {
    Done *bool `json:"done,omitempty"`
    Kind *string `json:"kind,omitempty"`
    ObjectSize *string `json:"objectSize,omitempty"`
    Resource *Object `json:"resource,omitempty"`
    RewriteToken *string `json:"rewriteToken,omitempty"`
    TotalBytesRewritten *string `json:"totalBytesRewritten,omitempty"`
    
}

