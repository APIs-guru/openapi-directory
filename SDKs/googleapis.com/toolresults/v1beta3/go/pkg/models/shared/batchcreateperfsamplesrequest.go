package shared

// BatchCreatePerfSamplesRequest
// The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error
type BatchCreatePerfSamplesRequest struct {
	PerfSamples []PerfSample `json:"perfSamples,omitempty"`
}
