package shared

// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest
// Request message for the create processor version method.
type GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest struct {
	BaseProcessorVersion *string                                                            `json:"baseProcessorVersion,omitempty"`
	DocumentSchema       *GoogleCloudDocumentaiV1beta3DocumentSchema                        `json:"documentSchema,omitempty"`
	InputData            *GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData `json:"inputData,omitempty"`
	ProcessorVersion     *GoogleCloudDocumentaiV1beta3ProcessorVersion                      `json:"processorVersion,omitempty"`
}
