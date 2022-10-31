package shared

type UpdateTopicRequest struct {
	Topic      *Topic  `json:"topic,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
