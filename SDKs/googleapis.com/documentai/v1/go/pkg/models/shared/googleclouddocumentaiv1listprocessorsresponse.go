package shared

// GoogleCloudDocumentaiV1ListProcessorsResponse
// Response message for list processors.
type GoogleCloudDocumentaiV1ListProcessorsResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Processors    []GoogleCloudDocumentaiV1Processor `json:"processors,omitempty"`
}
