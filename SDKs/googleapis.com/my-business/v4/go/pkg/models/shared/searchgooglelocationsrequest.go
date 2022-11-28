package shared

// SearchGoogleLocationsRequestInput
// Request message for GoogleLocations.SearchGoogleLocations.
type SearchGoogleLocationsRequestInput struct {
	Location    *LocationInput `json:"location,omitempty"`
	Query       *string        `json:"query,omitempty"`
	ResultCount *int32         `json:"resultCount,omitempty"`
}
