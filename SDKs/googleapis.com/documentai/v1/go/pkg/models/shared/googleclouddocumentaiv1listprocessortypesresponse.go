package shared



type GoogleCloudDocumentaiV1ListProcessorTypesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ProcessorTypes []GoogleCloudDocumentaiV1ProcessorType `json:"processorTypes,omitempty"`
    
}

