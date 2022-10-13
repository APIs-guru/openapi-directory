package shared

type GoogleCloudDocumentaiV1ListProcessorsResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Processors    []GoogleCloudDocumentaiV1Processor `json:"processors"`
}
