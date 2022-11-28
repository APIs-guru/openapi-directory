package shared

// GoogleCloudDocumentaiV1beta3BoundingPoly
// A bounding polygon for the detected image annotation.
type GoogleCloudDocumentaiV1beta3BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1beta3NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudDocumentaiV1beta3Vertex           `json:"vertices,omitempty"`
}
