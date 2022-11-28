package shared

// SolidFill
// A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists.
type SolidFill struct {
	Alpha *float32     `json:"alpha,omitempty"`
	Color *OpaqueColor `json:"color,omitempty"`
}
