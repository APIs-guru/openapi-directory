package shared

type ColorStop struct {
	Alpha    *float32     `json:"alpha,omitempty"`
	Color    *OpaqueColor `json:"color,omitempty"`
	Position *float32     `json:"position,omitempty"`
}
