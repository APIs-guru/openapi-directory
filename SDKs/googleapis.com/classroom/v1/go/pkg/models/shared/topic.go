package shared

type Topic struct {
	CourseID   *string `json:"courseId,omitempty"`
	Name       *string `json:"name,omitempty"`
	TopicID    *string `json:"topicId,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
