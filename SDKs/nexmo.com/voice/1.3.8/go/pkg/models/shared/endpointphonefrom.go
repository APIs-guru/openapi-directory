package shared

// EndpointPhoneFrom
// Connect to a Phone (PSTN) number
type EndpointPhoneFrom struct {
	Number string `json:"number"`
	Type   string `json:"type"`
}
