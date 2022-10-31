package shared

type LatLongRect struct {
	MaxLatLng *LatLng `json:"maxLatLng,omitempty"`
	MinLatLng *LatLng `json:"minLatLng,omitempty"`
}
