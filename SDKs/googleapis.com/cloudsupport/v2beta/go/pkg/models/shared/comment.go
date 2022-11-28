package shared

// CommentInput
// A comment associated with a support case.
type CommentInput struct {
	Body    *string     `json:"body,omitempty"`
	Creator *ActorInput `json:"creator,omitempty"`
}

// Comment
// A comment associated with a support case.
type Comment struct {
	Body          *string `json:"body,omitempty"`
	CreateTime    *string `json:"createTime,omitempty"`
	Creator       *Actor  `json:"creator,omitempty"`
	Name          *string `json:"name,omitempty"`
	PlainTextBody *string `json:"plainTextBody,omitempty"`
}
