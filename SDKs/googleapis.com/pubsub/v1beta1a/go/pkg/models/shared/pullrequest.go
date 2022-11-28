package shared

// PullRequest
// Request for the Pull method.
type PullRequest struct {
	ReturnImmediately *bool   `json:"returnImmediately,omitempty"`
	Subscription      *string `json:"subscription,omitempty"`
}
