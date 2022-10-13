package shared

type GoogleCloudVisionV1p1beta1OutputConfig struct {
	BatchSize      *int32                                    `json:"batchSize"`
	GcsDestination *GoogleCloudVisionV1p1beta1GcsDestination `json:"gcsDestination"`
}
