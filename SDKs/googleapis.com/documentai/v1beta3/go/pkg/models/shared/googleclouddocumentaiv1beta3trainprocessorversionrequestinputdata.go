package shared

// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData
// The input data used to train a new `ProcessorVersion`.
type GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData struct {
	TestDocuments     *GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig `json:"testDocuments,omitempty"`
	TrainingDocuments *GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig `json:"trainingDocuments,omitempty"`
}
