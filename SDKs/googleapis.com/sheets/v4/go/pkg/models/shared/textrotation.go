package shared

// TextRotation
// The rotation applied to text in a cell.
type TextRotation struct {
	Angle    *int32 `json:"angle,omitempty"`
	Vertical *bool  `json:"vertical,omitempty"`
}
