package shared

type InsertSectionBreakRequestSectionTypeEnum string

const (
	InsertSectionBreakRequestSectionTypeEnumSectionTypeUnspecified InsertSectionBreakRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	InsertSectionBreakRequestSectionTypeEnumContinuous             InsertSectionBreakRequestSectionTypeEnum = "CONTINUOUS"
	InsertSectionBreakRequestSectionTypeEnumNextPage               InsertSectionBreakRequestSectionTypeEnum = "NEXT_PAGE"
)

// InsertSectionBreakRequest
// Inserts a section break at the given location. A newline character will be inserted before the section break.
type InsertSectionBreakRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation                     `json:"endOfSegmentLocation,omitempty"`
	Location             *Location                                 `json:"location,omitempty"`
	SectionType          *InsertSectionBreakRequestSectionTypeEnum `json:"sectionType,omitempty"`
}
