package shared

// GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse
// Response message for list processors.
type GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse struct {
	NextPageToken     *string                                        `json:"nextPageToken,omitempty"`
	ProcessorVersions []GoogleCloudDocumentaiV1beta3ProcessorVersion `json:"processorVersions,omitempty"`
}
