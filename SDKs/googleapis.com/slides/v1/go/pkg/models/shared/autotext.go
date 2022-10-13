package shared

type AutoTextTypeEnum string

const (
	AutoTextTypeEnumTypeUnspecified AutoTextTypeEnum = "TYPE_UNSPECIFIED"
	AutoTextTypeEnumSlideNumber     AutoTextTypeEnum = "SLIDE_NUMBER"
)

type AutoText struct {
	Content *string           `json:"content"`
	Style   *TextStyle        `json:"style"`
	Type    *AutoTextTypeEnum `json:"type"`
}
