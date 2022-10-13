package shared

type SectionSectionTypeEnum string

const (
	SectionSectionTypeEnumSectionTypeUnspecified SectionSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	SectionSectionTypeEnumFood                   SectionSectionTypeEnum = "FOOD"
	SectionSectionTypeEnumServices               SectionSectionTypeEnum = "SERVICES"
)

type Section struct {
	Items       []Item                  `json:"items"`
	Labels      []Label                 `json:"labels"`
	SectionID   *string                 `json:"sectionId"`
	SectionType *SectionSectionTypeEnum `json:"sectionType"`
}
