package shared

type GoogleCloudVisionV1p1beta1TextAnnotation struct {
	Pages []GoogleCloudVisionV1p1beta1Page `json:"pages"`
	Text  *string                          `json:"text"`
}
