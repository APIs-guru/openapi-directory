package shared

type Question struct {
	Author           *Author  `json:"author"`
	CreateTime       *string  `json:"createTime"`
	Name             *string  `json:"name"`
	Text             *string  `json:"text"`
	TopAnswers       []Answer `json:"topAnswers"`
	TotalAnswerCount *int32   `json:"totalAnswerCount"`
	UpdateTime       *string  `json:"updateTime"`
	UpvoteCount      *int32   `json:"upvoteCount"`
}
