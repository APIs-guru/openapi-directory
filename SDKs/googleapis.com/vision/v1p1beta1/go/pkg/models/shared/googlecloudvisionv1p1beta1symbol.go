package shared

type GoogleCloudVisionV1p1beta1Symbol struct {
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox"`
	Confidence  *float32                                              `json:"confidence"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property"`
	Text        *string                                               `json:"text"`
}
