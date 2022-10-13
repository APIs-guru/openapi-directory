package shared

type GoogleCloudVisionV1p2beta1Page struct {
	Blocks     []GoogleCloudVisionV1p2beta1Block                     `json:"blocks"`
	Confidence *float32                                              `json:"confidence"`
	Height     *int32                                                `json:"height"`
	Property   *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property"`
	Width      *int32                                                `json:"width"`
}
