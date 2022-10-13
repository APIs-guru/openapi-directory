package shared

type GoogleCloudVisionV1p2beta1InputConfig struct {
	Content   *string                              `json:"content"`
	GcsSource *GoogleCloudVisionV1p2beta1GcsSource `json:"gcsSource"`
	MimeType  *string                              `json:"mimeType"`
}
