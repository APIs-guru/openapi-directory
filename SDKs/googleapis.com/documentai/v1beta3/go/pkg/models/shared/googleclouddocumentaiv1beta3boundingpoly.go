package shared

type GoogleCloudDocumentaiV1beta3BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1beta3NormalizedVertex `json:"normalizedVertices"`
	Vertices           []GoogleCloudDocumentaiV1beta3Vertex           `json:"vertices"`
}
