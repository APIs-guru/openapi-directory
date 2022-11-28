package shared

// PointRadius
// A radius around a particular point (latitude/longitude).
type PointRadius struct {
	Latlng   *LatLng  `json:"latlng,omitempty"`
	RadiusKm *float32 `json:"radiusKm,omitempty"`
}
