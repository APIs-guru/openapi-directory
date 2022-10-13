package shared

type DestinationConfig struct {
	DestinationConnectionProfileName *string               `json:"destinationConnectionProfileName"`
	GcsDestinationConfig             *GcsDestinationConfig `json:"gcsDestinationConfig"`
}
