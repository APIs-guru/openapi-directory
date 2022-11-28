package shared

// GetPeopleResponse
// The response to a get request for a list of people by resource name.
type GetPeopleResponse struct {
	Responses []PersonResponse `json:"responses,omitempty"`
}
