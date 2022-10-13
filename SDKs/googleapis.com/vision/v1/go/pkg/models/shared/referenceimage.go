package shared

type ReferenceImage struct {
	BoundingPolys []BoundingPoly `json:"boundingPolys"`
	Name          *string        `json:"name"`
	URI           *string        `json:"uri"`
}
