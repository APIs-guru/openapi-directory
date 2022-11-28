package shared

// ListPlaceActionTypeMetadataResponse
// Response message for PlaceActions.ListPlaceActionTypeMetadata.
type ListPlaceActionTypeMetadataResponse struct {
	NextPageToken           *string                   `json:"nextPageToken,omitempty"`
	PlaceActionTypeMetadata []PlaceActionTypeMetadata `json:"placeActionTypeMetadata,omitempty"`
}
