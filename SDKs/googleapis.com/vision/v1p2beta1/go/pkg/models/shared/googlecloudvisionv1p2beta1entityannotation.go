package shared

type GoogleCloudVisionV1p2beta1EntityAnnotation struct {
	BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly  `json:"boundingPoly"`
	Confidence   *float32                                 `json:"confidence"`
	Description  *string                                  `json:"description"`
	Locale       *string                                  `json:"locale"`
	Locations    []GoogleCloudVisionV1p2beta1LocationInfo `json:"locations"`
	Mid          *string                                  `json:"mid"`
	Properties   []GoogleCloudVisionV1p2beta1Property     `json:"properties"`
	Score        *float32                                 `json:"score"`
	Topicality   *float32                                 `json:"topicality"`
}
