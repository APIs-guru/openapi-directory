package shared

type PageAuthorImage struct {
	URL *string `json:"url,omitempty"`
}

type PageAuthor struct {
	DisplayName *string          `json:"displayName,omitempty"`
	ID          *string          `json:"id,omitempty"`
	Image       *PageAuthorImage `json:"image,omitempty"`
	URL         *string          `json:"url,omitempty"`
}

type PageBlog struct {
	ID *string `json:"id,omitempty"`
}

type PageStatusEnum string

const (
	PageStatusEnumLive        PageStatusEnum = "LIVE"
	PageStatusEnumDraft       PageStatusEnum = "DRAFT"
	PageStatusEnumSoftTrashed PageStatusEnum = "SOFT_TRASHED"
)

type Page struct {
	Author    *PageAuthor     `json:"author,omitempty"`
	Blog      *PageBlog       `json:"blog,omitempty"`
	Content   *string         `json:"content,omitempty"`
	Etag      *string         `json:"etag,omitempty"`
	ID        *string         `json:"id,omitempty"`
	Kind      *string         `json:"kind,omitempty"`
	Published *string         `json:"published,omitempty"`
	SelfLink  *string         `json:"selfLink,omitempty"`
	Status    *PageStatusEnum `json:"status,omitempty"`
	Title     *string         `json:"title,omitempty"`
	Trashed   *string         `json:"trashed,omitempty"`
	Updated   *string         `json:"updated,omitempty"`
	URL       *string         `json:"url,omitempty"`
}
