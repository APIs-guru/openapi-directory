package shared

type GoogleCloudDocumentaiV1beta3ListProcessorsResponse struct {
	NextPageToken *string                                 `json:"nextPageToken"`
	Processors    []GoogleCloudDocumentaiV1beta3Processor `json:"processors"`
}
