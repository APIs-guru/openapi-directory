package shared

// GoogleCloudDocumentaiV1GcsDocument
// Specifies a document stored on Cloud Storage.
type GoogleCloudDocumentaiV1GcsDocument struct {
	GcsURI   *string `json:"gcsUri,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
