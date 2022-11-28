package shared

// OutputConfig
// Output configuration for BatchTranslateText request.
type OutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
}
