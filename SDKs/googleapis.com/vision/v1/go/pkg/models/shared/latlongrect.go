package shared

type LatLongRect struct {
	MaxLatLng *LatLng `json:"maxLatLng"`
	MinLatLng *LatLng `json:"minLatLng"`
}
