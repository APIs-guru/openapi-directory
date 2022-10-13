package shared

type PostAuthorImage struct {
	URL *string `json:"url"`
}

type PostAuthor struct {
	DisplayName *string          `json:"displayName"`
	ID          *string          `json:"id"`
	Image       *PostAuthorImage `json:"image"`
	URL         *string          `json:"url"`
}

type PostBlog struct {
	ID *string `json:"id"`
}

type PostImages struct {
	URL *string `json:"url"`
}

type PostLocation struct {
	Lat  *float64 `json:"lat"`
	Lng  *float64 `json:"lng"`
	Name *string  `json:"name"`
	Span *string  `json:"span"`
}

type PostReaderCommentsEnum string

const (
	PostReaderCommentsEnumAllow                 PostReaderCommentsEnum = "ALLOW"
	PostReaderCommentsEnumDontAllowShowExisting PostReaderCommentsEnum = "DONT_ALLOW_SHOW_EXISTING"
	PostReaderCommentsEnumDontAllowHideExisting PostReaderCommentsEnum = "DONT_ALLOW_HIDE_EXISTING"
)

type PostReplies struct {
	Items      []Comment `json:"items"`
	SelfLink   *string   `json:"selfLink"`
	TotalItems *string   `json:"totalItems"`
}

type PostStatusEnum string

const (
	PostStatusEnumLive        PostStatusEnum = "LIVE"
	PostStatusEnumDraft       PostStatusEnum = "DRAFT"
	PostStatusEnumScheduled   PostStatusEnum = "SCHEDULED"
	PostStatusEnumSoftTrashed PostStatusEnum = "SOFT_TRASHED"
)

type Post struct {
	Author         *PostAuthor             `json:"author"`
	Blog           *PostBlog               `json:"blog"`
	Content        *string                 `json:"content"`
	CustomMetaData *string                 `json:"customMetaData"`
	Etag           *string                 `json:"etag"`
	ID             *string                 `json:"id"`
	Images         []PostImages            `json:"images"`
	Kind           *string                 `json:"kind"`
	Labels         []string                `json:"labels"`
	Location       *PostLocation           `json:"location"`
	Published      *string                 `json:"published"`
	ReaderComments *PostReaderCommentsEnum `json:"readerComments"`
	Replies        *PostReplies            `json:"replies"`
	SelfLink       *string                 `json:"selfLink"`
	Status         *PostStatusEnum         `json:"status"`
	Title          *string                 `json:"title"`
	TitleLink      *string                 `json:"titleLink"`
	Trashed        *string                 `json:"trashed"`
	Updated        *string                 `json:"updated"`
	URL            *string                 `json:"url"`
}
