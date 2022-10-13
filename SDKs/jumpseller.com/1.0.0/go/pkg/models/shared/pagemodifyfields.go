package shared

type PageModifyFieldsImage struct {
	ID  *int64  `json:"id"`
	URL *string `json:"url"`
}

type PageModifyFieldsStatusEnum string

const (
	PageModifyFieldsStatusEnumPublic PageModifyFieldsStatusEnum = "public"
	PageModifyFieldsStatusEnumDraft  PageModifyFieldsStatusEnum = "draft"
	PageModifyFieldsStatusEnumHidden PageModifyFieldsStatusEnum = "hidden"
)

type PageModifyFields struct {
	Body            *string                     `json:"body"`
	Categories      []PageCategory              `json:"categories"`
	Image           *PageModifyFieldsImage      `json:"image"`
	MetaDescription *string                     `json:"meta_description"`
	PageTitle       *string                     `json:"page_title"`
	Permalink       *string                     `json:"permalink"`
	Status          *PageModifyFieldsStatusEnum `json:"status"`
	Template        *int64                      `json:"template"`
	Title           *string                     `json:"title"`
}
