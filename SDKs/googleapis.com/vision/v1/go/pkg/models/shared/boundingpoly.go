package shared

type BoundingPoly struct {
	NormalizedVertices []NormalizedVertex `json:"normalizedVertices"`
	Vertices           []Vertex           `json:"vertices"`
}
