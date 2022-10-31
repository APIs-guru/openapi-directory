package shared

type AutoTextTypeEnum string

const (
	AutoTextTypeEnumTypeUnspecified AutoTextTypeEnum = "TYPE_UNSPECIFIED"
	AutoTextTypeEnumSlideNumber     AutoTextTypeEnum = "SLIDE_NUMBER"
)

type AutoText struct {
	Content *string           `json:"content,omitempty"`
	Style   *TextStyle        `json:"style,omitempty"`
	Type    *AutoTextTypeEnum `json:"type,omitempty"`
}
