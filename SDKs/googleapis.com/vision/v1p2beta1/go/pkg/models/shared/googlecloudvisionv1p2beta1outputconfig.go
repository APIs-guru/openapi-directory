package shared

// GoogleCloudVisionV1p2beta1OutputConfig
// The desired output location and metadata.
type GoogleCloudVisionV1p2beta1OutputConfig struct {
	BatchSize      *int32                                    `json:"batchSize,omitempty"`
	GcsDestination *GoogleCloudVisionV1p2beta1GcsDestination `json:"gcsDestination,omitempty"`
}
