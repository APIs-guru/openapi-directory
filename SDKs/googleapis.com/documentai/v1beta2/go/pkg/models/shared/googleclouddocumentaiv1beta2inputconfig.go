package shared

type GoogleCloudDocumentaiV1beta2InputConfig struct {
	Contents  *string                                `json:"contents"`
	GcsSource *GoogleCloudDocumentaiV1beta2GcsSource `json:"gcsSource"`
	MimeType  *string                                `json:"mimeType"`
}
