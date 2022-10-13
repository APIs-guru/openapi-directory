package shared

type GoogleCloudDocumentaiV1ListProcessorVersionsResponse struct {
	NextPageToken     *string                                   `json:"nextPageToken"`
	ProcessorVersions []GoogleCloudDocumentaiV1ProcessorVersion `json:"processorVersions"`
}
