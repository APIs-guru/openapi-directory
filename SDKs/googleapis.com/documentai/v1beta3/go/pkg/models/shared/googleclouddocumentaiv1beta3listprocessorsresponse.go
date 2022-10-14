package shared

type GoogleCloudDocumentaiV1beta3ListProcessorsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Processors    []GoogleCloudDocumentaiV1beta3Processor `json:"processors,omitempty"`
}
