package shared



type OutputConfig struct {
    BatchSize *int32 `json:"batchSize,omitempty"`
    GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
    
}

