package shared

// GoogleCloudDocumentaiV1beta2OutputConfig
// The desired output location and metadata.
type GoogleCloudDocumentaiV1beta2OutputConfig struct {
	GcsDestination *GoogleCloudDocumentaiV1beta2GcsDestination `json:"gcsDestination,omitempty"`
	PagesPerShard  *int32                                      `json:"pagesPerShard,omitempty"`
}
