package shared

type GoogleCloudDocumentaiV1beta3BatchProcessRequest struct {
	DocumentOutputConfig *GoogleCloudDocumentaiV1beta3DocumentOutputConfig                 `json:"documentOutputConfig"`
	InputConfigs         []GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig `json:"inputConfigs"`
	InputDocuments       *GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig            `json:"inputDocuments"`
	OutputConfig         *GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig `json:"outputConfig"`
	SkipHumanReview      *bool                                                             `json:"skipHumanReview"`
}
