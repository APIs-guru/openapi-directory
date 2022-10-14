package shared

type CommentAuthorImage struct {
	URL *string `json:"url,omitempty"`
}

type CommentAuthor struct {
	DisplayName *string             `json:"displayName,omitempty"`
	ID          *string             `json:"id,omitempty"`
	Image       *CommentAuthorImage `json:"image,omitempty"`
	URL         *string             `json:"url,omitempty"`
}

type CommentBlog struct {
	ID *string `json:"id,omitempty"`
}

type CommentInReplyTo struct {
	ID *string `json:"id,omitempty"`
}

type CommentPost struct {
	ID *string `json:"id,omitempty"`
}

type CommentStatusEnum string

const (
	CommentStatusEnumLive    CommentStatusEnum = "LIVE"
	CommentStatusEnumEmptied CommentStatusEnum = "EMPTIED"
	CommentStatusEnumPending CommentStatusEnum = "PENDING"
	CommentStatusEnumSpam    CommentStatusEnum = "SPAM"
)

type Comment struct {
	Author    *CommentAuthor     `json:"author,omitempty"`
	Blog      *CommentBlog       `json:"blog,omitempty"`
	Content   *string            `json:"content,omitempty"`
	ID        *string            `json:"id,omitempty"`
	InReplyTo *CommentInReplyTo  `json:"inReplyTo,omitempty"`
	Kind      *string            `json:"kind,omitempty"`
	Post      *CommentPost       `json:"post,omitempty"`
	Published *string            `json:"published,omitempty"`
	SelfLink  *string            `json:"selfLink,omitempty"`
	Status    *CommentStatusEnum `json:"status,omitempty"`
	Updated   *string            `json:"updated,omitempty"`
}
