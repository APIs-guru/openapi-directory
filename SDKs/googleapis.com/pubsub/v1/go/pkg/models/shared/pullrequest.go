package shared

// PullRequest
// Request for the `Pull` method.
type PullRequest struct {
	MaxMessages       *int32 `json:"maxMessages,omitempty"`
	ReturnImmediately *bool  `json:"returnImmediately,omitempty"`
}
