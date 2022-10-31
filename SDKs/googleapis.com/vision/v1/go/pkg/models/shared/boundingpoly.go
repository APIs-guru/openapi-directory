package shared

type BoundingPoly struct {
	NormalizedVertices []NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []Vertex           `json:"vertices,omitempty"`
}
