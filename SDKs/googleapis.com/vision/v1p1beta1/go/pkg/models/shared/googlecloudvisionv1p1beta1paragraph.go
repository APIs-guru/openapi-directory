package shared

// GoogleCloudVisionV1p1beta1Paragraph
// Structural unit of text representing a number of words in certain order.
type GoogleCloudVisionV1p1beta1Paragraph struct {
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox,omitempty"`
	Confidence  *float32                                              `json:"confidence,omitempty"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property,omitempty"`
	Words       []GoogleCloudVisionV1p1beta1Word                      `json:"words,omitempty"`
}
