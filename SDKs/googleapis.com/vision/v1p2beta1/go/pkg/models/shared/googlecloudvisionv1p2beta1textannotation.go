package shared

type GoogleCloudVisionV1p2beta1TextAnnotation struct {
	Pages []GoogleCloudVisionV1p2beta1Page `json:"pages"`
	Text  *string                          `json:"text"`
}
