package shared

// GoogleCloudDocumentaiV1beta3ListProcessorsResponse
// Response message for list processors.
type GoogleCloudDocumentaiV1beta3ListProcessorsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Processors    []GoogleCloudDocumentaiV1beta3Processor `json:"processors,omitempty"`
}
