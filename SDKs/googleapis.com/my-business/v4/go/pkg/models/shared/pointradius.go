package shared

type PointRadius struct {
	Latlng   *LatLng  `json:"latlng,omitempty"`
	RadiusKm *float32 `json:"radiusKm,omitempty"`
}
