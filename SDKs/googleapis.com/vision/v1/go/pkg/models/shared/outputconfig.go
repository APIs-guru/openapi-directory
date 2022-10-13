package shared

type OutputConfig struct {
	BatchSize      *int32          `json:"batchSize"`
	GcsDestination *GcsDestination `json:"gcsDestination"`
}
