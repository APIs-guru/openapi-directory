package shared

// DestinationConfig
// Define the Connectors target endpoint.
type DestinationConfig struct {
	Destinations []Destination `json:"destinations,omitempty"`
	Key          *string       `json:"key,omitempty"`
}
