package shared

// PullBatchResponse
// Response for the PullBatch method.
type PullBatchResponse struct {
	PullResponses []PullResponse `json:"pullResponses,omitempty"`
}
