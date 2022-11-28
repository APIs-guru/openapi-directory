package shared

// EmbeddedObjectBorder
// A border along an embedded object.
type EmbeddedObjectBorder struct {
	Color      *Color      `json:"color,omitempty"`
	ColorStyle *ColorStyle `json:"colorStyle,omitempty"`
}
