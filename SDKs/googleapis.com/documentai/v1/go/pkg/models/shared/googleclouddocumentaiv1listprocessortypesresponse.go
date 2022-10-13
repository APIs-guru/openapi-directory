package shared

type GoogleCloudDocumentaiV1ListProcessorTypesResponse struct {
	NextPageToken  *string                                `json:"nextPageToken"`
	ProcessorTypes []GoogleCloudDocumentaiV1ProcessorType `json:"processorTypes"`
}
