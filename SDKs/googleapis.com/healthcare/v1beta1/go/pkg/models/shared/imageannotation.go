package shared

type ImageAnnotation struct {
	BoundingPolys []BoundingPoly `json:"boundingPolys"`
	FrameIndex    *int32         `json:"frameIndex"`
}
