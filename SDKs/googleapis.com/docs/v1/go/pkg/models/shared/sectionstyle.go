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

type SectionStyle struct {
	ColumnProperties         []SectionColumnProperties             `json:"columnProperties"`
	ColumnSeparatorStyle     *SectionStyleColumnSeparatorStyleEnum `json:"columnSeparatorStyle"`
	ContentDirection         *SectionStyleContentDirectionEnum     `json:"contentDirection"`
	DefaultFooterID          *string                               `json:"defaultFooterId"`
	DefaultHeaderID          *string                               `json:"defaultHeaderId"`
	EvenPageFooterID         *string                               `json:"evenPageFooterId"`
	EvenPageHeaderID         *string                               `json:"evenPageHeaderId"`
	FirstPageFooterID        *string                               `json:"firstPageFooterId"`
	FirstPageHeaderID        *string                               `json:"firstPageHeaderId"`
	MarginBottom             *Dimension                            `json:"marginBottom"`
	MarginFooter             *Dimension                            `json:"marginFooter"`
	MarginHeader             *Dimension                            `json:"marginHeader"`
	MarginLeft               *Dimension                            `json:"marginLeft"`
	MarginRight              *Dimension                            `json:"marginRight"`
	MarginTop                *Dimension                            `json:"marginTop"`
	PageNumberStart          *int32                                `json:"pageNumberStart"`
	SectionType              *SectionStyleSectionTypeEnum          `json:"sectionType"`
	UseFirstPageHeaderFooter *bool                                 `json:"useFirstPageHeaderFooter"`
}
