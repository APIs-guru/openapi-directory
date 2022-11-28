package shared

// GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest
// Request to batch process documents as an asynchronous operation. The output is written to Cloud Storage as JSON in the [Document] format.
type GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest struct {
	Requests []GoogleCloudDocumentaiV1beta2ProcessDocumentRequest `json:"requests,omitempty"`
}
