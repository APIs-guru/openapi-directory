package shared

type DestinationConfig struct {
	DestinationConnectionProfileName *string               `json:"destinationConnectionProfileName,omitempty"`
	GcsDestinationConfig             *GcsDestinationConfig `json:"gcsDestinationConfig,omitempty"`
}
