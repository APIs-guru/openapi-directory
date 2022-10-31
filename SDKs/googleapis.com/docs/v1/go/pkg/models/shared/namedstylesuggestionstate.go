package shared

type NamedStyleSuggestionStateNamedStyleTypeEnum string

const (
	NamedStyleSuggestionStateNamedStyleTypeEnumNamedStyleTypeUnspecified NamedStyleSuggestionStateNamedStyleTypeEnum = "NAMED_STYLE_TYPE_UNSPECIFIED"
	NamedStyleSuggestionStateNamedStyleTypeEnumNormalText                NamedStyleSuggestionStateNamedStyleTypeEnum = "NORMAL_TEXT"
	NamedStyleSuggestionStateNamedStyleTypeEnumTitle                     NamedStyleSuggestionStateNamedStyleTypeEnum = "TITLE"
	NamedStyleSuggestionStateNamedStyleTypeEnumSubtitle                  NamedStyleSuggestionStateNamedStyleTypeEnum = "SUBTITLE"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading1                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_1"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading2                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_2"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading3                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_3"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading4                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_4"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading5                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_5"
	NamedStyleSuggestionStateNamedStyleTypeEnumHeading6                  NamedStyleSuggestionStateNamedStyleTypeEnum = "HEADING_6"
)

type NamedStyleSuggestionState struct {
	NamedStyleType                *NamedStyleSuggestionStateNamedStyleTypeEnum `json:"namedStyleType,omitempty"`
	ParagraphStyleSuggestionState *ParagraphStyleSuggestionState               `json:"paragraphStyleSuggestionState,omitempty"`
	TextStyleSuggestionState      *TextStyleSuggestionState                    `json:"textStyleSuggestionState,omitempty"`
}
