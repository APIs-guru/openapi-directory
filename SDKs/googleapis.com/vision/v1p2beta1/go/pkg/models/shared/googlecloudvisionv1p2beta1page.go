package shared

// GoogleCloudVisionV1p2beta1Page
// Detected page from OCR.
type GoogleCloudVisionV1p2beta1Page struct {
	Blocks     []GoogleCloudVisionV1p2beta1Block                     `json:"blocks,omitempty"`
	Confidence *float32                                              `json:"confidence,omitempty"`
	Height     *int32                                                `json:"height,omitempty"`
	Property   *GoogleCloudVisionV1p2beta1TextAnnotationTextProperty `json:"property,omitempty"`
	Width      *int32                                                `json:"width,omitempty"`
}
