package shared



type GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ProcessorVersions []GoogleCloudDocumentaiV1beta3ProcessorVersion `json:"processorVersions,omitempty"`
    
}

