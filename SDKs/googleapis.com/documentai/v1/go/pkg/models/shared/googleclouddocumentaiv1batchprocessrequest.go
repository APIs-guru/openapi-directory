package shared

// GoogleCloudDocumentaiV1BatchProcessRequest
// Request message for batch process document method.
type GoogleCloudDocumentaiV1BatchProcessRequest struct {
	DocumentOutputConfig *GoogleCloudDocumentaiV1DocumentOutputConfig      `json:"documentOutputConfig,omitempty"`
	InputDocuments       *GoogleCloudDocumentaiV1BatchDocumentsInputConfig `json:"inputDocuments,omitempty"`
	SkipHumanReview      *bool                                             `json:"skipHumanReview,omitempty"`
}
