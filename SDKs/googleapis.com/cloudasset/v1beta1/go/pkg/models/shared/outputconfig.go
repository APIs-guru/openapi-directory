package shared

// OutputConfig
// Output configuration for export assets destination.
type OutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
