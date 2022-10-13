package shared

type GoogleCloudDocumentaiV1BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1NormalizedVertex `json:"normalizedVertices"`
	Vertices           []GoogleCloudDocumentaiV1Vertex           `json:"vertices"`
}
