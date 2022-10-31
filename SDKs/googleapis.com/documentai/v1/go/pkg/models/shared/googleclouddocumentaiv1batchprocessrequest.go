package shared



type GoogleCloudDocumentaiV1BatchProcessRequest struct {
    DocumentOutputConfig *GoogleCloudDocumentaiV1DocumentOutputConfig `json:"documentOutputConfig,omitempty"`
    InputDocuments *GoogleCloudDocumentaiV1BatchDocumentsInputConfig `json:"inputDocuments,omitempty"`
    SkipHumanReview *bool `json:"skipHumanReview,omitempty"`
    
}

