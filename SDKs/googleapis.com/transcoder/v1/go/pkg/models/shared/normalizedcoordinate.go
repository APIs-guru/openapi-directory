package shared

// NormalizedCoordinate
// 2D normalized coordinates. Default: `{0.0, 0.0}`
type NormalizedCoordinate struct {
	X *float64 `json:"x,omitempty"`
	Y *float64 `json:"y,omitempty"`
}
