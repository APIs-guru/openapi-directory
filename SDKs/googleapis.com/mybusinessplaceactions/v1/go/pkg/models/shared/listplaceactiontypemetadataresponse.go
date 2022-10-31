package shared

type ListPlaceActionTypeMetadataResponse struct {
	NextPageToken           *string                   `json:"nextPageToken,omitempty"`
	PlaceActionTypeMetadata []PlaceActionTypeMetadata `json:"placeActionTypeMetadata,omitempty"`
}
