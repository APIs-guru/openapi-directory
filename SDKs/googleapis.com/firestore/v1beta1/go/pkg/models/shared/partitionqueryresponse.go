package shared



type PartitionQueryResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Partitions []Cursor `json:"partitions,omitempty"`
    
}

