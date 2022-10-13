package shared

type GoogleCloudConnectorsV1DestinationConfig struct {
	Destinations []GoogleCloudConnectorsV1Destination `json:"destinations"`
	Key          *string                              `json:"key"`
}
