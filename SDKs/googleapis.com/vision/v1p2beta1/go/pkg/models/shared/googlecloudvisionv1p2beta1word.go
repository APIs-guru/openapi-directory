package shared

// GoogleCloudVisionV1p2beta1Word
// A word representation.
type GoogleCloudVisionV1p2beta1Word struct {
	BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly               `json:"boundingBox,omitempty"`
	Confidence  *float32                                              `json:"confidence,omitempty"`
	Property    *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property,omitempty"`
	Symbols     []GoogleCloudVisionV1p2beta1Symbol                    `json:"symbols,omitempty"`
}
