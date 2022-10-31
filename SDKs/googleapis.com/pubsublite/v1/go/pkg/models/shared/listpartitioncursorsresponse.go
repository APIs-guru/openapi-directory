package shared



type ListPartitionCursorsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PartitionCursors []PartitionCursor `json:"partitionCursors,omitempty"`
    
}

