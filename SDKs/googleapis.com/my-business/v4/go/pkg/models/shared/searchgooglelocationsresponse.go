package shared

// SearchGoogleLocationsResponse
// Response message for GoogleLocations.SearchGoogleLocations.
type SearchGoogleLocationsResponse struct {
	GoogleLocations []GoogleLocation `json:"googleLocations,omitempty"`
}
