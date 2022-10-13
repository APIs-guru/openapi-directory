package shared

type LocationKey struct {
	ExplicitNoPlaceID *bool   `json:"explicitNoPlaceId"`
	PlaceID           *string `json:"placeId"`
	PlusPageID        *string `json:"plusPageId"`
	RequestID         *string `json:"requestId"`
}
