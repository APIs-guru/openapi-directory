package shared

// ListLocationsResponse
// The response message for Locations.ListLocations.
type ListLocationsResponse struct {
	Locations     []Location `json:"locations,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
