package shared

type GoogleCloudVisionV1p2beta1BoundingPoly struct {
	NormalizedVertices []GoogleCloudVisionV1p2beta1NormalizedVertex `json:"normalizedVertices"`
	Vertices           []GoogleCloudVisionV1p2beta1Vertex           `json:"vertices"`
}
