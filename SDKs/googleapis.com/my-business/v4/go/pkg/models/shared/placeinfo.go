package shared

// PlaceInfo
// Defines an area that's represented by a place ID.
type PlaceInfo struct {
	Name    *string `json:"name,omitempty"`
	PlaceID *string `json:"placeId,omitempty"`
}
