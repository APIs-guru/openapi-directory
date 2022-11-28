package shared

// GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation
// Set of detected objects with bounding boxes.
type GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation struct {
	BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly,omitempty"`
	LanguageCode *string                                 `json:"languageCode,omitempty"`
	Mid          *string                                 `json:"mid,omitempty"`
	Name         *string                                 `json:"name,omitempty"`
	Score        *float32                                `json:"score,omitempty"`
}
