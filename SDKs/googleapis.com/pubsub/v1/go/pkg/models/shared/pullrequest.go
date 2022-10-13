package shared

type PullRequest struct {
	MaxMessages       *int32 `json:"maxMessages"`
	ReturnImmediately *bool  `json:"returnImmediately"`
}
