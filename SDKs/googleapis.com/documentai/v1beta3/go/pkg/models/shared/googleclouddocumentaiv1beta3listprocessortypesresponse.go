package shared

// GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse
// Response message for list processor types.
type GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse struct {
	NextPageToken  *string                                     `json:"nextPageToken,omitempty"`
	ProcessorTypes []GoogleCloudDocumentaiV1beta3ProcessorType `json:"processorTypes,omitempty"`
}
