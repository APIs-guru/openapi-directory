package shared

type ListAvailableLocationsResponse struct {
	Locations     []Location `json:"locations,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
