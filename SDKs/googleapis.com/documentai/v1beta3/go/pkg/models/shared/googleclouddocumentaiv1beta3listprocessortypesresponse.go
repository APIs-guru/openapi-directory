package shared

type GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse struct {
	NextPageToken  *string                                     `json:"nextPageToken"`
	ProcessorTypes []GoogleCloudDocumentaiV1beta3ProcessorType `json:"processorTypes"`
}
