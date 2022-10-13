package shared

type PointRadius struct {
	Latlng   *LatLng  `json:"latlng"`
	RadiusKm *float32 `json:"radiusKm"`
}
