package shared

type GoogleCloudDocumentaiV1beta2BoundingPoly struct {
	NormalizedVertices []GoogleCloudDocumentaiV1beta2NormalizedVertex `json:"normalizedVertices"`
	Vertices           []GoogleCloudDocumentaiV1beta2Vertex           `json:"vertices"`
}
