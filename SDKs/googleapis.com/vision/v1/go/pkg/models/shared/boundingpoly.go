package shared

// BoundingPoly
// A bounding polygon for the detected image annotation.
type BoundingPoly struct {
	NormalizedVertices []NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []Vertex           `json:"vertices,omitempty"`
}
