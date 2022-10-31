package shared



type ListPerfSamplesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    PerfSamples []PerfSample `json:"perfSamples,omitempty"`
    
}

