package shared

// GoogleCloudDocumentaiV1beta2BoundingPoly
// A bounding polygon for the detected image annotation.
type GoogleCloudDocumentaiV1beta2BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1beta2NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudDocumentaiV1beta2Vertex           `json:"vertices,omitempty"`
}
