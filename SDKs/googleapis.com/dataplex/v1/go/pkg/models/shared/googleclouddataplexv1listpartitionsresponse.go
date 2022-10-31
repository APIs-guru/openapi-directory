package shared



type GoogleCloudDataplexV1ListPartitionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Partitions []GoogleCloudDataplexV1Partition `json:"partitions,omitempty"`
    
}

