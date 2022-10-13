package shared

type DestinationConfig struct {
	BigqueryDestinationConfig    *BigQueryDestinationConfig `json:"bigqueryDestinationConfig"`
	DestinationConnectionProfile *string                    `json:"destinationConnectionProfile"`
	GcsDestinationConfig         *GcsDestinationConfig      `json:"gcsDestinationConfig"`
}
