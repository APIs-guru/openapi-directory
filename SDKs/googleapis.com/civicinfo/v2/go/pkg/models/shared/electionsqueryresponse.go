package shared

// ElectionsQueryResponse
// The list of elections available for this version of the API.
type ElectionsQueryResponse struct {
	Elections []Election `json:"elections,omitempty"`
	Kind      *string    `json:"kind,omitempty"`
}
