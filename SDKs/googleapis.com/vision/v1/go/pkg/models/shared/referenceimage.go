package shared

// ReferenceImage
// A `ReferenceImage` represents a product image and its associated metadata, such as bounding boxes.
type ReferenceImage struct {
	BoundingPolys []BoundingPoly `json:"boundingPolys,omitempty"`
	Name          *string        `json:"name,omitempty"`
	URI           *string        `json:"uri,omitempty"`
}
