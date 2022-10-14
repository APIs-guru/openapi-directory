package shared

type DestinationConfig struct {
	BigqueryDestinationConfig    *BigQueryDestinationConfig `json:"bigqueryDestinationConfig,omitempty"`
	DestinationConnectionProfile *string                    `json:"destinationConnectionProfile,omitempty"`
	GcsDestinationConfig         *GcsDestinationConfig      `json:"gcsDestinationConfig,omitempty"`
}
