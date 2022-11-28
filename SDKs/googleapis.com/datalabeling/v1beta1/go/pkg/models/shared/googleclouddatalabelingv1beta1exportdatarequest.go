package shared

// GoogleCloudDatalabelingV1beta1ExportDataRequest
// Request message for ExportData API.
type GoogleCloudDatalabelingV1beta1ExportDataRequest struct {
	AnnotatedDataset *string                                     `json:"annotatedDataset,omitempty"`
	Filter           *string                                     `json:"filter,omitempty"`
	OutputConfig     *GoogleCloudDatalabelingV1beta1OutputConfig `json:"outputConfig,omitempty"`
	UserEmailAddress *string                                     `json:"userEmailAddress,omitempty"`
}
