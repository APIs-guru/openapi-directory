package shared

// LatLngBounds
// A rectangle in geographical coordinates.
type LatLngBounds struct {
	Northeast *LatLng `json:"northeast,omitempty"`
	Southwest *LatLng `json:"southwest,omitempty"`
}
