package shared



type GoogleMapsPlayablelocationsV3SamplePlayableLocation struct {
    CenterPoint *GoogleTypeLatLng `json:"centerPoint,omitempty"`
    Name *string `json:"name,omitempty"`
    PlaceID *string `json:"placeId,omitempty"`
    PlusCode *string `json:"plusCode,omitempty"`
    SnappedPoint *GoogleTypeLatLng `json:"snappedPoint,omitempty"`
    Types []string `json:"types,omitempty"`
    
}

