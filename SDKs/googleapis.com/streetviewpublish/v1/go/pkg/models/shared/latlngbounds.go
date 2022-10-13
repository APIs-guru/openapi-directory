package shared

type LatLngBounds struct {
	Northeast *LatLng `json:"northeast"`
	Southwest *LatLng `json:"southwest"`
}
