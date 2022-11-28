package shared

// GoogleCloudVisionV1p1beta1Word
// A word representation.
type GoogleCloudVisionV1p1beta1Word struct {
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox,omitempty"`
	Confidence  *float32                                              `json:"confidence,omitempty"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property,omitempty"`
	Symbols     []GoogleCloudVisionV1p1beta1Symbol                    `json:"symbols,omitempty"`
}
