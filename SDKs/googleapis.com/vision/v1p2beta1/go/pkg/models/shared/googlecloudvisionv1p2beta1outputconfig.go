package shared

type GoogleCloudVisionV1p2beta1OutputConfig struct {
	BatchSize      *int32                                    `json:"batchSize"`
	GcsDestination *GoogleCloudVisionV1p2beta1GcsDestination `json:"gcsDestination"`
}
