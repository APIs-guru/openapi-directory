package shared

// GoogleCloudVisionV1p2beta1EntityAnnotation
// Set of detected entity features.
type GoogleCloudVisionV1p2beta1EntityAnnotation struct {
	BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly  `json:"boundingPoly,omitempty"`
	Confidence   *float32                                 `json:"confidence,omitempty"`
	Description  *string                                  `json:"description,omitempty"`
	Locale       *string                                  `json:"locale,omitempty"`
	Locations    []GoogleCloudVisionV1p2beta1LocationInfo `json:"locations,omitempty"`
	Mid          *string                                  `json:"mid,omitempty"`
	Properties   []GoogleCloudVisionV1p2beta1Property     `json:"properties,omitempty"`
	Score        *float32                                 `json:"score,omitempty"`
	Topicality   *float32                                 `json:"topicality,omitempty"`
}
