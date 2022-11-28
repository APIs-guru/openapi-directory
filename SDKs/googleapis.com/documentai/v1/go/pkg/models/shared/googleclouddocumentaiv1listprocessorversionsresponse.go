package shared

// GoogleCloudDocumentaiV1ListProcessorVersionsResponse
// Response message for list processors.
type GoogleCloudDocumentaiV1ListProcessorVersionsResponse struct {
	NextPageToken     *string                                   `json:"nextPageToken,omitempty"`
	ProcessorVersions []GoogleCloudDocumentaiV1ProcessorVersion `json:"processorVersions,omitempty"`
}
