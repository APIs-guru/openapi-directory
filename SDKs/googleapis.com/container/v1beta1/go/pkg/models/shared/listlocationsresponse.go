package shared

// ListLocationsResponse
// ListLocationsResponse returns the list of all GKE locations and their recommendation state.
type ListLocationsResponse struct {
	Locations     []Location `json:"locations,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
