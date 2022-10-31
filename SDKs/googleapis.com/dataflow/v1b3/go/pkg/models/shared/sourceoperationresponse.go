package shared



type SourceOperationResponse struct {
    GetMetadata *SourceGetMetadataResponse `json:"getMetadata,omitempty"`
    Split *SourceSplitResponse `json:"split,omitempty"`
    
}

