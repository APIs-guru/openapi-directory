package shared

// PageModifyFieldsImage
// Image of the Page
type PageModifyFieldsImage struct {
	ID  *int64  `json:"id,omitempty"`
	URL *string `json:"url,omitempty"`
}

type PageModifyFieldsStatusEnum string

const (
	PageModifyFieldsStatusEnumPublic PageModifyFieldsStatusEnum = "public"
	PageModifyFieldsStatusEnumDraft  PageModifyFieldsStatusEnum = "draft"
	PageModifyFieldsStatusEnumHidden PageModifyFieldsStatusEnum = "hidden"
)

type PageModifyFields struct {
	Body            *string                     `json:"body,omitempty"`
	Categories      []PageCategory              `json:"categories,omitempty"`
	Image           *PageModifyFieldsImage      `json:"image,omitempty"`
	MetaDescription *string                     `json:"meta_description,omitempty"`
	PageTitle       *string                     `json:"page_title,omitempty"`
	Permalink       *string                     `json:"permalink,omitempty"`
	Status          *PageModifyFieldsStatusEnum `json:"status,omitempty"`
	Template        *int64                      `json:"template,omitempty"`
	Title           *string                     `json:"title,omitempty"`
}
