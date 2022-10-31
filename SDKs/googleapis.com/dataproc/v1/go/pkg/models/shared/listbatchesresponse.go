package shared



type ListBatchesResponse struct {
    Batches []Batch `json:"batches,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

