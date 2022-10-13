package shared

type EndpointPhoneTo struct {
	DtmfAnswer *string `json:"dtmfAnswer"`
	Number     string  `json:"number"`
	Type       string  `json:"type"`
}
