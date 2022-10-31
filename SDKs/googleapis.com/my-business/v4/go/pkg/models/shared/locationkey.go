package shared

type LocationKey struct {
	ExplicitNoPlaceID *bool   `json:"explicitNoPlaceId,omitempty"`
	PlaceID           *string `json:"placeId,omitempty"`
	PlusPageID        *string `json:"plusPageId,omitempty"`
	RequestID         *string `json:"requestId,omitempty"`
}
