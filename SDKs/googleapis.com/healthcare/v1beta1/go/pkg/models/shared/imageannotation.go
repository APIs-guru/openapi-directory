package shared

type ImageAnnotation struct {
	BoundingPolys []BoundingPoly `json:"boundingPolys,omitempty"`
	FrameIndex    *int32         `json:"frameIndex,omitempty"`
}
