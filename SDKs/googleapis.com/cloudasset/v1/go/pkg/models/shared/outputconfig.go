package shared

// OutputConfig
// Output configuration for export assets destination.
type OutputConfig struct {
	BigqueryDestination *BigQueryDestination `json:"bigqueryDestination,omitempty"`
	GcsDestination      *GcsDestination      `json:"gcsDestination,omitempty"`
}
