package shared

// GoogleCloudVisionV1p1beta1OutputConfig
// The desired output location and metadata.
type GoogleCloudVisionV1p1beta1OutputConfig struct {
	BatchSize      *int32                                    `json:"batchSize,omitempty"`
	GcsDestination *GoogleCloudVisionV1p1beta1GcsDestination `json:"gcsDestination,omitempty"`
}
