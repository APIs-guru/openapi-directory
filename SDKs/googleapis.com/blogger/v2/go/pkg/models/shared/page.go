package shared

type PageAuthorImage struct {
	URL *string `json:"url"`
}

type PageAuthor struct {
	DisplayName *string          `json:"displayName"`
	ID          *string          `json:"id"`
	Image       *PageAuthorImage `json:"image"`
	URL         *string          `json:"url"`
}

type PageBlog struct {
	ID *string `json:"id"`
}

type PageStatusEnum string

const (
	PageStatusEnumLive        PageStatusEnum = "LIVE"
	PageStatusEnumDraft       PageStatusEnum = "DRAFT"
	PageStatusEnumSoftTrashed PageStatusEnum = "SOFT_TRASHED"
)

type Page struct {
	Author    *PageAuthor     `json:"author"`
	Blog      *PageBlog       `json:"blog"`
	Content   *string         `json:"content"`
	Etag      *string         `json:"etag"`
	ID        *string         `json:"id"`
	Kind      *string         `json:"kind"`
	Published *string         `json:"published"`
	SelfLink  *string         `json:"selfLink"`
	Status    *PageStatusEnum `json:"status"`
	Title     *string         `json:"title"`
	Trashed   *string         `json:"trashed"`
	Updated   *string         `json:"updated"`
	URL       *string         `json:"url"`
}
