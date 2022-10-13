package shared

type UpdateTopicRequest struct {
	Topic      *Topic  `json:"topic"`
	UpdateMask *string `json:"updateMask"`
}
