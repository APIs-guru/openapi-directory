package shared

type PullRequest struct {
	ReturnImmediately *bool   `json:"returnImmediately"`
	Subscription      *string `json:"subscription"`
}
