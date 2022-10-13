package shared

type GoogleCloudVisionV1p2beta1Paragraph struct {
	BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly               `json:"boundingBox"`
	Confidence  *float32                                              `json:"confidence"`
	Property    *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property"`
	Words       []GoogleCloudVisionV1p2beta1Word                      `json:"words"`
}
