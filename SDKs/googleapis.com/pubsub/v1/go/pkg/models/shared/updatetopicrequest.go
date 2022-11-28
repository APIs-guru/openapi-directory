package shared

// UpdateTopicRequest
// Request for the UpdateTopic method.
type UpdateTopicRequest struct {
	Topic      *Topic  `json:"topic,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
