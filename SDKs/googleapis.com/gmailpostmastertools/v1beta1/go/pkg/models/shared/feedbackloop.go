package shared

type FeedbackLoop struct {
	ID        *string  `json:"id,omitempty"`
	SpamRatio *float64 `json:"spamRatio,omitempty"`
}
