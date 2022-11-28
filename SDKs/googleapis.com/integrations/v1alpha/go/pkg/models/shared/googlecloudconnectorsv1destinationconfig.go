package shared

// GoogleCloudConnectorsV1DestinationConfig
// Define the Connectors target endpoint.
type GoogleCloudConnectorsV1DestinationConfig struct {
	Destinations []GoogleCloudConnectorsV1Destination `json:"destinations,omitempty"`
	Key          *string                              `json:"key,omitempty"`
}
