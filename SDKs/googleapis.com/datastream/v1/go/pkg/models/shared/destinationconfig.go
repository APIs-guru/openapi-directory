package shared

// DestinationConfig
// The configuration of the stream destination.
type DestinationConfig struct {
	BigqueryDestinationConfig    *BigQueryDestinationConfig `json:"bigqueryDestinationConfig,omitempty"`
	DestinationConnectionProfile *string                    `json:"destinationConnectionProfile,omitempty"`
	GcsDestinationConfig         *GcsDestinationConfig      `json:"gcsDestinationConfig,omitempty"`
}
