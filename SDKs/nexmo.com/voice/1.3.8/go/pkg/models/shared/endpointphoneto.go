package shared

// EndpointPhoneTo
// Connect to a Phone (PSTN) number
type EndpointPhoneTo struct {
	DtmfAnswer *string `json:"dtmfAnswer,omitempty"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}
