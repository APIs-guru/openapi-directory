package shared

// Two
// Connect to a SIP Endpoint
type Two struct {
	Type string  `json:"type"`
	URI  *string `json:"uri,omitempty"`
}
