package shared

type GoogleCloudVisionV1p1beta1BoundingPoly struct {
	NormalizedVertices []GoogleCloudVisionV1p1beta1NormalizedVertex `json:"normalizedVertices"`
	Vertices           []GoogleCloudVisionV1p1beta1Vertex           `json:"vertices"`
}
