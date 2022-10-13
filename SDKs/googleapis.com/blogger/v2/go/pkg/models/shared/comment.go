package shared

type CommentAuthorImage struct {
	URL *string `json:"url"`
}

type CommentAuthor struct {
	DisplayName *string             `json:"displayName"`
	ID          *string             `json:"id"`
	Image       *CommentAuthorImage `json:"image"`
	URL         *string             `json:"url"`
}

type CommentBlog struct {
	ID *string `json:"id"`
}

type CommentInReplyTo struct {
	ID *string `json:"id"`
}

type CommentPost struct {
	ID *string `json:"id"`
}

type CommentStatusEnum string

const (
	CommentStatusEnumLive    CommentStatusEnum = "LIVE"
	CommentStatusEnumEmptied CommentStatusEnum = "EMPTIED"
	CommentStatusEnumPending CommentStatusEnum = "PENDING"
	CommentStatusEnumSpam    CommentStatusEnum = "SPAM"
)

type Comment struct {
	Author    *CommentAuthor     `json:"author"`
	Blog      *CommentBlog       `json:"blog"`
	Content   *string            `json:"content"`
	ID        *string            `json:"id"`
	InReplyTo *CommentInReplyTo  `json:"inReplyTo"`
	Kind      *string            `json:"kind"`
	Post      *CommentPost       `json:"post"`
	Published *string            `json:"published"`
	SelfLink  *string            `json:"selfLink"`
	Status    *CommentStatusEnum `json:"status"`
	Updated   *string            `json:"updated"`
}
