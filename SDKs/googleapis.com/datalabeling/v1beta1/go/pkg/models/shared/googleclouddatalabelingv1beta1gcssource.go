package shared

// GoogleCloudDatalabelingV1beta1GcsSource
// Source of the Cloud Storage file to be imported.
type GoogleCloudDatalabelingV1beta1GcsSource struct {
	InputURI *string `json:"inputUri,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
