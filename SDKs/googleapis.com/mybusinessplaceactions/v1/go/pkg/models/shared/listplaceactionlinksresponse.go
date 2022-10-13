package shared

type ListPlaceActionLinksResponse struct {
	NextPageToken    *string           `json:"nextPageToken"`
	PlaceActionLinks []PlaceActionLink `json:"placeActionLinks"`
}
