package shared

type ListPlaceActionTypeMetadataResponse struct {
	NextPageToken           *string                   `json:"nextPageToken"`
	PlaceActionTypeMetadata []PlaceActionTypeMetadata `json:"placeActionTypeMetadata"`
}
