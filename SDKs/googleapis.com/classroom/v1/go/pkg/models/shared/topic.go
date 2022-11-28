package shared

// Topic
// Topic created by a teacher for the course
type Topic struct {
	CourseID   *string `json:"courseId,omitempty"`
	Name       *string `json:"name,omitempty"`
	TopicID    *string `json:"topicId,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
