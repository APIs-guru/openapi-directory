package shared

type NamedStyleNamedStyleTypeEnum string

const (
	NamedStyleNamedStyleTypeEnumNamedStyleTypeUnspecified NamedStyleNamedStyleTypeEnum = "NAMED_STYLE_TYPE_UNSPECIFIED"
	NamedStyleNamedStyleTypeEnumNormalText                NamedStyleNamedStyleTypeEnum = "NORMAL_TEXT"
	NamedStyleNamedStyleTypeEnumTitle                     NamedStyleNamedStyleTypeEnum = "TITLE"
	NamedStyleNamedStyleTypeEnumSubtitle                  NamedStyleNamedStyleTypeEnum = "SUBTITLE"
	NamedStyleNamedStyleTypeEnumHeading1                  NamedStyleNamedStyleTypeEnum = "HEADING_1"
	NamedStyleNamedStyleTypeEnumHeading2                  NamedStyleNamedStyleTypeEnum = "HEADING_2"
	NamedStyleNamedStyleTypeEnumHeading3                  NamedStyleNamedStyleTypeEnum = "HEADING_3"
	NamedStyleNamedStyleTypeEnumHeading4                  NamedStyleNamedStyleTypeEnum = "HEADING_4"
	NamedStyleNamedStyleTypeEnumHeading5                  NamedStyleNamedStyleTypeEnum = "HEADING_5"
	NamedStyleNamedStyleTypeEnumHeading6                  NamedStyleNamedStyleTypeEnum = "HEADING_6"
)

type NamedStyle struct {
	NamedStyleType *NamedStyleNamedStyleTypeEnum `json:"namedStyleType,omitempty"`
	ParagraphStyle *ParagraphStyle               `json:"paragraphStyle,omitempty"`
	TextStyle      *TextStyle                    `json:"textStyle,omitempty"`
}
