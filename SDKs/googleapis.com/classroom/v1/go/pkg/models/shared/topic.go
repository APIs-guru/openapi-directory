package shared

type Topic struct {
	CourseID   *string `json:"courseId"`
	Name       *string `json:"name"`
	TopicID    *string `json:"topicId"`
	UpdateTime *string `json:"updateTime"`
}
