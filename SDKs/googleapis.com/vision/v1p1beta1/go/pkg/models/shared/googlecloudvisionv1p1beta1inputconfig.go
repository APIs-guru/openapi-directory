package shared

type GoogleCloudVisionV1p1beta1InputConfig struct {
	Content   *string                              `json:"content"`
	GcsSource *GoogleCloudVisionV1p1beta1GcsSource `json:"gcsSource"`
	MimeType  *string                              `json:"mimeType"`
}
