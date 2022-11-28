package shared

// CountriesListResponse
// Country List Response
type CountriesListResponse struct {
	Countries []Country `json:"countries,omitempty"`
	Kind      *string   `json:"kind,omitempty"`
}
