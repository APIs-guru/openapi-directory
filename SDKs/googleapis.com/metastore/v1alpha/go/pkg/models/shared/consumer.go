package shared

type Consumer struct {
	EndpointURI *string `json:"endpointUri"`
	Subnetwork  *string `json:"subnetwork"`
}
