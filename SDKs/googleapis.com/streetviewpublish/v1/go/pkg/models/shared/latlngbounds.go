package shared

type LatLngBounds struct {
	Northeast *LatLng `json:"northeast,omitempty"`
	Southwest *LatLng `json:"southwest,omitempty"`
}
