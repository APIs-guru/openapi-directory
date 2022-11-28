package shared

// BoundingPoly
// A bounding polygon for the detected image annotation.
type BoundingPoly struct {
	Label    *string  `json:"label,omitempty"`
	Vertices []Vertex `json:"vertices,omitempty"`
}
