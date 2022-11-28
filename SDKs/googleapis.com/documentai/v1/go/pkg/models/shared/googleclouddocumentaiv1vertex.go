package shared

// GoogleCloudDocumentaiV1Vertex
// A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
type GoogleCloudDocumentaiV1Vertex struct {
	X *int32 `json:"x,omitempty"`
	Y *int32 `json:"y,omitempty"`
}
