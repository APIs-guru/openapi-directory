package shared

type ProductDestination struct {
	DestinationName *string `json:"destinationName,omitempty"`
	Intention       *string `json:"intention,omitempty"`
}
