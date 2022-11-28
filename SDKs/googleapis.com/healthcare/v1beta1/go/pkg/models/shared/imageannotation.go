package shared

// ImageAnnotation
// Image annotation.
type ImageAnnotation struct {
	BoundingPolys []BoundingPoly `json:"boundingPolys,omitempty"`
	FrameIndex    *int32         `json:"frameIndex,omitempty"`
}
