package shared

// PullBatchRequest
// Request for the PullBatch method.
type PullBatchRequest struct {
	MaxEvents         *int32  `json:"maxEvents,omitempty"`
	ReturnImmediately *bool   `json:"returnImmediately,omitempty"`
	Subscription      *string `json:"subscription,omitempty"`
}
