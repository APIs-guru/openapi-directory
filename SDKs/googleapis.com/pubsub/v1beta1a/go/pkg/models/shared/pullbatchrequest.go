package shared

type PullBatchRequest struct {
	MaxEvents         *int32  `json:"maxEvents"`
	ReturnImmediately *bool   `json:"returnImmediately"`
	Subscription      *string `json:"subscription"`
}
