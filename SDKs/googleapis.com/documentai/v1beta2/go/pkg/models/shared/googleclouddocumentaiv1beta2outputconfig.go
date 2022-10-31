package shared



type GoogleCloudDocumentaiV1beta2OutputConfig struct {
    GcsDestination *GoogleCloudDocumentaiV1beta2GcsDestination `json:"gcsDestination,omitempty"`
    PagesPerShard *int32 `json:"pagesPerShard,omitempty"`
    
}

