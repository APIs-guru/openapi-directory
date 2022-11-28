package shared

// ReviewReply
// Represents the location owner/manager's reply to a review.
type ReviewReply struct {
	Comment    *string `json:"comment,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
