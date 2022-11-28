package shared

// OutputConfig
// OutputConfig contains a destination for writing trace data.
type OutputConfig struct {
	Destination *string `json:"destination,omitempty"`
}
