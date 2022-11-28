package shared

// OptionalColor
// A color that can either be fully opaque or fully transparent.
type OptionalColor struct {
	Color *Color `json:"color,omitempty"`
}
