package shared

type GoogleCloudVisionV1p2beta1Symbol struct {
	BoundingBox *GoogleCloudVisionV1p2beta1BoundingPoly               `json:"boundingBox"`
	Confidence  *float32                                              `json:"confidence"`
	Property    *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property"`
	Text        *string                                               `json:"text"`
}
