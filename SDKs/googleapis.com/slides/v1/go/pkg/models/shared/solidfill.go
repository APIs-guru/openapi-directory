package shared

type SolidFill struct {
	Alpha *float32     `json:"alpha,omitempty"`
	Color *OpaqueColor `json:"color,omitempty"`
}
