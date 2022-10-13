package shared

type GoogleMapsPlayablelocationsV3SamplePlayableLocation struct {
	CenterPoint  *GoogleTypeLatLng `json:"centerPoint"`
	Name         *string           `json:"name"`
	PlaceID      *string           `json:"placeId"`
	PlusCode     *string           `json:"plusCode"`
	SnappedPoint *GoogleTypeLatLng `json:"snappedPoint"`
	Types        []string          `json:"types"`
}
