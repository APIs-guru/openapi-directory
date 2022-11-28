package shared

type SectionSectionTypeEnum string

const (
	SectionSectionTypeEnumSectionTypeUnspecified SectionSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	SectionSectionTypeEnumFood                   SectionSectionTypeEnum = "FOOD"
	SectionSectionTypeEnumServices               SectionSectionTypeEnum = "SERVICES"
)

// Section
// A section of the price list containing one or more items.
type Section struct {
	Items       []Item                  `json:"items,omitempty"`
	Labels      []Label                 `json:"labels,omitempty"`
	SectionID   *string                 `json:"sectionId,omitempty"`
	SectionType *SectionSectionTypeEnum `json:"sectionType,omitempty"`
}
