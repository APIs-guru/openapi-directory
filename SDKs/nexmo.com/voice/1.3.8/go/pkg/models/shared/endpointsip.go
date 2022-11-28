package shared

// EndpointSip
// Connect to a SIP Endpoint
type EndpointSip struct {
	Type string  `json:"type"`
	URI  *string `json:"uri,omitempty"`
}
