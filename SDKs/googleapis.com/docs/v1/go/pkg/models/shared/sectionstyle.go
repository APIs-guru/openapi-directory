package shared

type SectionStyleColumnSeparatorStyleEnum string

const (
	SectionStyleColumnSeparatorStyleEnumColumnSeparatorStyleUnspecified SectionStyleColumnSeparatorStyleEnum = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED"
	SectionStyleColumnSeparatorStyleEnumNone                            SectionStyleColumnSeparatorStyleEnum = "NONE"
	SectionStyleColumnSeparatorStyleEnumBetweenEachColumn               SectionStyleColumnSeparatorStyleEnum = "BETWEEN_EACH_COLUMN"
)

type SectionStyleContentDirectionEnum string

const (
	SectionStyleContentDirectionEnumContentDirectionUnspecified SectionStyleContentDirectionEnum = "CONTENT_DIRECTION_UNSPECIFIED"
	SectionStyleContentDirectionEnumLeftToRight                 SectionStyleContentDirectionEnum = "LEFT_TO_RIGHT"
	SectionStyleContentDirectionEnumRightToLeft                 SectionStyleContentDirectionEnum = "RIGHT_TO_LEFT"
)

type SectionStyleSectionTypeEnum string

const (
	SectionStyleSectionTypeEnumSectionTypeUnspecified SectionStyleSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	SectionStyleSectionTypeEnumContinuous             SectionStyleSectionTypeEnum = "CONTINUOUS"
	SectionStyleSectionTypeEnumNextPage               SectionStyleSectionTypeEnum = "NEXT_PAGE"
)

// SectionStyle
// The styling that applies to a section.
type SectionStyle struct {
	ColumnProperties         []SectionColumnProperties             `json:"columnProperties,omitempty"`
	ColumnSeparatorStyle     *SectionStyleColumnSeparatorStyleEnum `json:"columnSeparatorStyle,omitempty"`
	ContentDirection         *SectionStyleContentDirectionEnum     `json:"contentDirection,omitempty"`
	DefaultFooterID          *string                               `json:"defaultFooterId,omitempty"`
	DefaultHeaderID          *string                               `json:"defaultHeaderId,omitempty"`
	EvenPageFooterID         *string                               `json:"evenPageFooterId,omitempty"`
	EvenPageHeaderID         *string                               `json:"evenPageHeaderId,omitempty"`
	FirstPageFooterID        *string                               `json:"firstPageFooterId,omitempty"`
	FirstPageHeaderID        *string                               `json:"firstPageHeaderId,omitempty"`
	MarginBottom             *Dimension                            `json:"marginBottom,omitempty"`
	MarginFooter             *Dimension                            `json:"marginFooter,omitempty"`
	MarginHeader             *Dimension                            `json:"marginHeader,omitempty"`
	MarginLeft               *Dimension                            `json:"marginLeft,omitempty"`
	MarginRight              *Dimension                            `json:"marginRight,omitempty"`
	MarginTop                *Dimension                            `json:"marginTop,omitempty"`
	PageNumberStart          *int32                                `json:"pageNumberStart,omitempty"`
	SectionType              *SectionStyleSectionTypeEnum          `json:"sectionType,omitempty"`
	UseFirstPageHeaderFooter *bool                                 `json:"useFirstPageHeaderFooter,omitempty"`
}
