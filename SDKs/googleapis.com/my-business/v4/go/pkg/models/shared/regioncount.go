package shared

type RegionCount struct {
	Count  *string `json:"count"`
	Label  *string `json:"label"`
	Latlng *LatLng `json:"latlng"`
}
