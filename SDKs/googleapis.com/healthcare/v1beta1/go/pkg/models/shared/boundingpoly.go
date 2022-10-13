package shared

type BoundingPoly struct {
	Label    *string  `json:"label"`
	Vertices []Vertex `json:"vertices"`
}
