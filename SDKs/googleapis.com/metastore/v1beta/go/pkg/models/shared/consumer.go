package shared

// Consumer
// Contains information of the customer's network configurations.
type Consumer struct {
	EndpointURI *string `json:"endpointUri,omitempty"`
	Subnetwork  *string `json:"subnetwork,omitempty"`
}

// ConsumerInput
// Contains information of the customer's network configurations.
type ConsumerInput struct {
	Subnetwork *string `json:"subnetwork,omitempty"`
}
