package shared

type GoogleCloudDocumentaiV1BatchProcessRequest struct {
	DocumentOutputConfig *GoogleCloudDocumentaiV1DocumentOutputConfig      `json:"documentOutputConfig"`
	InputDocuments       *GoogleCloudDocumentaiV1BatchDocumentsInputConfig `json:"inputDocuments"`
	SkipHumanReview      *bool                                             `json:"skipHumanReview"`
}
