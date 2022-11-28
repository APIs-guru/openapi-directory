package shared

// DestinationConfig
// The configuration of the stream destination.
type DestinationConfig struct {
	DestinationConnectionProfileName *string               `json:"destinationConnectionProfileName,omitempty"`
	GcsDestinationConfig             *GcsDestinationConfig `json:"gcsDestinationConfig,omitempty"`
}
