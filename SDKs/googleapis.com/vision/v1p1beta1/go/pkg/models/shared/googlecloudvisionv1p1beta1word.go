package shared

type GoogleCloudVisionV1p1beta1Word struct {
	BoundingBox *GoogleCloudVisionV1p1beta1BoundingPoly               `json:"boundingBox"`
	Confidence  *float32                                              `json:"confidence"`
	Property    *GoogleCloudVisionV1p1beta1TextAnnotationTextProperty `json:"property"`
	Symbols     []GoogleCloudVisionV1p1beta1Symbol                    `json:"symbols"`
}
