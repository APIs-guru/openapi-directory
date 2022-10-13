package shared

type FeedbackLoop struct {
	ID        *string  `json:"id"`
	SpamRatio *float64 `json:"spamRatio"`
}
