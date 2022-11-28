package shared

// GoogleCloudVisionV1p1beta1BoundingPoly
// A bounding polygon for the detected image annotation.
type GoogleCloudVisionV1p1beta1BoundingPoly struct {
	NormalizedVertices []GoogleCloudVisionV1p1beta1NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudVisionV1p1beta1Vertex           `json:"vertices,omitempty"`
}
