package shared



type ListPlaceActionLinksResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PlaceActionLinks []PlaceActionLink `json:"placeActionLinks,omitempty"`
    
}

