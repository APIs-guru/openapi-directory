package shared

// GoogleCloudDocumentaiV1BoundingPoly
// A bounding polygon for the detected image annotation.
type GoogleCloudDocumentaiV1BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudDocumentaiV1Vertex           `json:"vertices,omitempty"`
}
