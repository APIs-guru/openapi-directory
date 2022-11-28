package shared

// GoogleCloudVisionV1p2beta1BoundingPoly
// A bounding polygon for the detected image annotation.
type GoogleCloudVisionV1p2beta1BoundingPoly struct {
	NormalizedVertices []GoogleCloudVisionV1p2beta1NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudVisionV1p2beta1Vertex           `json:"vertices,omitempty"`
}
