package shared



type DatafeedsCustomBatchResponse struct {
    Entries []DatafeedsCustomBatchResponseEntry `json:"entries,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

