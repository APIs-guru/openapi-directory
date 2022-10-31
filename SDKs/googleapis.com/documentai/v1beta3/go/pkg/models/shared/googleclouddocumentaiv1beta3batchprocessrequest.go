package shared



type GoogleCloudDocumentaiV1beta3BatchProcessRequest struct {
    DocumentOutputConfig *GoogleCloudDocumentaiV1beta3DocumentOutputConfig `json:"documentOutputConfig,omitempty"`
    InputConfigs []GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig `json:"inputConfigs,omitempty"`
    InputDocuments *GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig `json:"inputDocuments,omitempty"`
    OutputConfig *GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig `json:"outputConfig,omitempty"`
    SkipHumanReview *bool `json:"skipHumanReview,omitempty"`
    
}

