package shared

// ColorStop
// A color and position in a gradient band.
type ColorStop struct {
	Alpha    *float32     `json:"alpha,omitempty"`
	Color    *OpaqueColor `json:"color,omitempty"`
	Position *float32     `json:"position,omitempty"`
}
