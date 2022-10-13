package shared

type ListPerfSamplesResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	PerfSamples   []PerfSample `json:"perfSamples"`
}
