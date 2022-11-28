package shared

// PlaceInfo
// Defines an area that's represented by a place ID.
type PlaceInfo struct {
	PlaceID   *string `json:"placeId,omitempty"`
	PlaceName *string `json:"placeName,omitempty"`
}
