package shared

// PageFieldsImage
// Image of the Page
type PageFieldsImage struct {
	ID  *int64  `json:"id,omitempty"`
	URL *string `json:"url,omitempty"`
}

type PageFieldsStatusEnum string

const (
	PageFieldsStatusEnumPublic PageFieldsStatusEnum = "public"
	PageFieldsStatusEnumDraft  PageFieldsStatusEnum = "draft"
	PageFieldsStatusEnumHidden PageFieldsStatusEnum = "hidden"
)

type PageFields struct {
	Body            *string               `json:"body,omitempty"`
	Categories      []PageCategory        `json:"categories,omitempty"`
	ID              *int64                `json:"id,omitempty"`
	Image           *PageFieldsImage      `json:"image,omitempty"`
	Legal           *bool                 `json:"legal,omitempty"`
	MetaDescription *string               `json:"meta_description,omitempty"`
	PageTitle       *string               `json:"page_title,omitempty"`
	Permalink       *string               `json:"permalink,omitempty"`
	Status          *PageFieldsStatusEnum `json:"status,omitempty"`
	Template        *PageTemplate         `json:"template,omitempty"`
	Title           *string               `json:"title,omitempty"`
}
