package shared

// Padding
// The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
type Padding struct {
	Bottom *int32 `json:"bottom,omitempty"`
	Left   *int32 `json:"left,omitempty"`
	Right  *int32 `json:"right,omitempty"`
	Top    *int32 `json:"top,omitempty"`
}
