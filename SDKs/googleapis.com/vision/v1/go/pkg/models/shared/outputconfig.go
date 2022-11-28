package shared

// OutputConfig
// The desired output location and metadata.
type OutputConfig struct {
	BatchSize      *int32          `json:"batchSize,omitempty"`
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
