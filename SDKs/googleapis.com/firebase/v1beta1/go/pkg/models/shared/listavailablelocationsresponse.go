package shared

type ListAvailableLocationsResponse struct {
	Locations     []Location `json:"locations"`
	NextPageToken *string    `json:"nextPageToken"`
}
