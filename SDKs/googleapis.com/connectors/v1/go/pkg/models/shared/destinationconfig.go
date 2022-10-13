package shared

type DestinationConfig struct {
	Destinations []Destination `json:"destinations"`
	Key          *string       `json:"key"`
}
