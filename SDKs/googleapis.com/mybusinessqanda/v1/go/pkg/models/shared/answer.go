package shared

type Answer struct {
	Author      *Author `json:"author"`
	CreateTime  *string `json:"createTime"`
	Name        *string `json:"name"`
	Text        *string `json:"text"`
	UpdateTime  *string `json:"updateTime"`
	UpvoteCount *int32  `json:"upvoteCount"`
}
