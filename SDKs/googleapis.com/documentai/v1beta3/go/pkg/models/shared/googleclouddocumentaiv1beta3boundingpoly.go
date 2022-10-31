package shared

type GoogleCloudDocumentaiV1beta3BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1beta3NormalizedVertex `json:"normalizedVertices,omitempty"`
	Vertices           []GoogleCloudDocumentaiV1beta3Vertex           `json:"vertices,omitempty"`
}
