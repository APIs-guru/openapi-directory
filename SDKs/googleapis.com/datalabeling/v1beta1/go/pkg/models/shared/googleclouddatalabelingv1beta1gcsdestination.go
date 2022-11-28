package shared

// GoogleCloudDatalabelingV1beta1GcsDestination
// Export destination of the data.Only gcs path is allowed in output_uri.
type GoogleCloudDatalabelingV1beta1GcsDestination struct {
	MimeType  *string `json:"mimeType,omitempty"`
	OutputURI *string `json:"outputUri,omitempty"`
}
