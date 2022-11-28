package shared

// FeedbackLoop
// [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
type FeedbackLoop struct {
	ID        *string  `json:"id,omitempty"`
	SpamRatio *float64 `json:"spamRatio,omitempty"`
}
