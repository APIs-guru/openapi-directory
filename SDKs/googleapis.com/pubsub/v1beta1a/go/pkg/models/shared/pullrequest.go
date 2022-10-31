package shared



type PullRequest struct {
    ReturnImmediately *bool `json:"returnImmediately,omitempty"`
    Subscription *string `json:"subscription,omitempty"`
    
}

