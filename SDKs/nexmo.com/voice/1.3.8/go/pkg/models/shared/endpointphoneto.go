package shared

type EndpointPhoneTo struct {
	DtmfAnswer *string `json:"dtmfAnswer,omitempty"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}
