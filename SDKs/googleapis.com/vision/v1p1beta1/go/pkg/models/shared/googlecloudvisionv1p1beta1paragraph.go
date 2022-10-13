package shared

type GoogleCloudVisionV1p1beta1Paragraph struct {
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox"`
	Confidence  *float32                                              `json:"confidence"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property"`
	Words       []GoogleCloudVisionV1p1beta1Word                      `json:"words"`
}
