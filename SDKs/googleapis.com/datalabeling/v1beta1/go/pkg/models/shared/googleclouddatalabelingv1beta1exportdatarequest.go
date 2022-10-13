package shared

type GoogleCloudDatalabelingV1beta1ExportDataRequest struct {
	AnnotatedDataset *string                                     `json:"annotatedDataset"`
	Filter           *string                                     `json:"filter"`
	OutputConfig     *GoogleCloudDatalabelingV1beta1OutputConfig `json:"outputConfig"`
	UserEmailAddress *string                                     `json:"userEmailAddress"`
}
