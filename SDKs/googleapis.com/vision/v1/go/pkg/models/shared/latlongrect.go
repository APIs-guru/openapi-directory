package shared

// LatLongRect
// Rectangle determined by min and max `LatLng` pairs.
type LatLongRect struct {
	MaxLatLng *LatLng `json:"maxLatLng,omitempty"`
	MinLatLng *LatLng `json:"minLatLng,omitempty"`
}
