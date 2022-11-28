package shared

// GoogleCloudDocumentaiV1beta3GcsDocument
// Specifies a document stored on Cloud Storage.
type GoogleCloudDocumentaiV1beta3GcsDocument struct {
	GcsURI   *string `json:"gcsUri,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
