package shared

// OutputConfig
// The output content
type OutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
