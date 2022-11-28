package shared

// AnimationStatic
// Display static overlay object.
type AnimationStatic struct {
	StartTimeOffset *string               `json:"startTimeOffset,omitempty"`
	Xy              *NormalizedCoordinate `json:"xy,omitempty"`
}
