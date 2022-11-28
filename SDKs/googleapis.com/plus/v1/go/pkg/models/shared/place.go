package shared

// PlaceAddress
// The physical address of the place.
type PlaceAddress struct {
	Formatted *string `json:"formatted,omitempty"`
}

// PlacePosition
// The position of the place.
type PlacePosition struct {
	Latitude  *float64 `json:"latitude,omitempty"`
	Longitude *float64 `json:"longitude,omitempty"`
}

type Place struct {
	Address     *PlaceAddress  `json:"address,omitempty"`
	DisplayName *string        `json:"displayName,omitempty"`
	ID          *string        `json:"id,omitempty"`
	Kind        *string        `json:"kind,omitempty"`
	Position    *PlacePosition `json:"position,omitempty"`
}
