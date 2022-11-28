package shared

// SearchGoogleLocationsRequestInput
// Request message for GoogleLocations.SearchGoogleLocations.
type SearchGoogleLocationsRequestInput struct {
	Location *LocationInput `json:"location,omitempty"`
	PageSize *int32         `json:"pageSize,omitempty"`
	Query    *string        `json:"query,omitempty"`
}
