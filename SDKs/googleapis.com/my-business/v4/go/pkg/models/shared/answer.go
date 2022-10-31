package shared

type Answer struct {
	Author      *Author `json:"author,omitempty"`
	CreateTime  *string `json:"createTime,omitempty"`
	Name        *string `json:"name,omitempty"`
	Text        *string `json:"text,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
	UpvoteCount *int32  `json:"upvoteCount,omitempty"`
}
