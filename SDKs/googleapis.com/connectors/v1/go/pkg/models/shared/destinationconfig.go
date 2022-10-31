package shared



type DestinationConfig struct {
    Destinations []Destination `json:"destinations,omitempty"`
    Key *string `json:"key,omitempty"`
    
}

