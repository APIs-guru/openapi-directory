package shared

// GoogleCloudDocumentaiV1ListProcessorTypesResponse
// Response message for list processor types.
type GoogleCloudDocumentaiV1ListProcessorTypesResponse struct {
	NextPageToken  *string                                `json:"nextPageToken,omitempty"`
	ProcessorTypes []GoogleCloudDocumentaiV1ProcessorType `json:"processorTypes,omitempty"`
}
