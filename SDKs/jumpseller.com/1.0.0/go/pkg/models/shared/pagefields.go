package shared

type PageFieldsImage struct {
	ID  *int64  `json:"id"`
	URL *string `json:"url"`
}

type PageFieldsStatusEnum string

const (
	PageFieldsStatusEnumPublic PageFieldsStatusEnum = "public"
	PageFieldsStatusEnumDraft  PageFieldsStatusEnum = "draft"
	PageFieldsStatusEnumHidden PageFieldsStatusEnum = "hidden"
)

type PageFields struct {
	Body            *string               `json:"body"`
	Categories      []PageCategory        `json:"categories"`
	ID              *int64                `json:"id"`
	Image           *PageFieldsImage      `json:"image"`
	Legal           *bool                 `json:"legal"`
	MetaDescription *string               `json:"meta_description"`
	PageTitle       *string               `json:"page_title"`
	Permalink       *string               `json:"permalink"`
	Status          *PageFieldsStatusEnum `json:"status"`
	Template        *PageTemplate         `json:"template"`
	Title           *string               `json:"title"`
}
