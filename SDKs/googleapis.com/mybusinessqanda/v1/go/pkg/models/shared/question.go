package shared

type Question struct {
	Author           *Author  `json:"author,omitempty"`
	CreateTime       *string  `json:"createTime,omitempty"`
	Name             *string  `json:"name,omitempty"`
	Text             *string  `json:"text,omitempty"`
	TopAnswers       []Answer `json:"topAnswers,omitempty"`
	TotalAnswerCount *int32   `json:"totalAnswerCount,omitempty"`
	UpdateTime       *string  `json:"updateTime,omitempty"`
	UpvoteCount      *int32   `json:"upvoteCount,omitempty"`
}
