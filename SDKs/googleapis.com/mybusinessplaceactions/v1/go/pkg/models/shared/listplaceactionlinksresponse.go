package shared

// ListPlaceActionLinksResponse
// Response message for PlaceActions.ListPlaceActionLinks.
type ListPlaceActionLinksResponse struct {
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
	PlaceActionLinks []PlaceActionLink `json:"placeActionLinks,omitempty"`
}
